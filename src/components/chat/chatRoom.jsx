import "../../App.css";
import React, { useRef, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth } from "../../firebase/firebase";
import { getFirestore, collection, query, orderBy, addDoc, updateDoc, doc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';  // Import toastify
import 'react-toastify/dist/ReactToastify.css';  // Import toastify styles

// Initialize Firestore
const firestore = getFirestore();

function ChatMessage(props) {
    const { text, uid, photoURL, senderName, id } = props.message;
    const { onEdit, onDelete } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    // Check if the user is the current user (for message styling)
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    const handleEdit = () => {
        if (isEditing) {
            onEdit(id, editedText); // Save changes
        }
        setIsEditing(!isEditing);
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            onDelete(id); // Trigger delete if onDelete is defined
        }
    };

    return (
        <div className={`message ${messageClass}`}>
            <img
                src={photoURL && photoURL.trim() !== '' ? photoURL : 'https://img.icons8.com/?size=100&id=bzanxGcmX3R8&format=png&color=000000'}
                alt="User Avatar"
            />
            <div>
                <strong>{senderName}</strong>
                {isEditing ? (
                    <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        rows="2" // Setting 2 rows for height
                        className="edit-textarea"
                        placeholder="Enter your text here..."
                    />
                ) : (
                    <p>{text}</p>
                )}
                {uid === auth.currentUser.uid && (
                    <div>
                        <button onClick={handleEdit} className="edit-button">
                            {isEditing ? '💾' : '📝️'}
                        </button>
                        <button onClick={handleDelete} className="delete-button">
                            🗑️ {/* Delete icon */}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}


export function ChatRoom() {
    const dummy = useRef();
    const messagesRef = collection(firestore, 'messages');
    const messagesQuery = query(messagesRef, orderBy('createdAt'));

    const [messagesSnapshot] = useCollection(messagesQuery);

    // Manually map Firestore snapshot to include document IDs
    const messages = messagesSnapshot?.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL, displayName, email } = auth.currentUser;

        const senderName = displayName || email || 'Anonymous';

        await addDoc(messagesRef, {
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL,
            senderName,
        });

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    };

    const editMessage = async (id, newText) => {
        if (!id) {
            console.warn("Message ID is missing, unable to edit.");
            return; // Early exit if no id is passed
        }
        try {
            const messageRef = doc(firestore, 'messages', id);
            await updateDoc(messageRef, { text: newText });
            console.log("Message updated successfully");
        } catch (error) {
            console.error("Error updating message:", error);
        }
    };

    const deleteMessage = async (id) => {
        if (!id) {
            console.warn("Message ID is missing, unable to delete.");
            return; // Early exit if no id is passed
        }

        try {
            const messageRef = doc(firestore, 'messages', id);
            await deleteDoc(messageRef);
            console.log("Message Deleted successfully");
            toast.success("Message Deleted Successfully!"); // Show toast on successful delete
        } catch (error) {
            console.error("Error Deleting message:", error);
            toast.error("Error Deleting Message."); // Show error toast
        }
    };

    return (
        <div className="chatroom-container">
            <main>
                {messages && messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} onEdit={editMessage} onDelete={deleteMessage} />
                ))}
                <span ref={dummy}></span>
            </main>

            <form onSubmit={sendMessage}>
                <input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="Say something nice"
                />
                <button type="submit" disabled={!formValue}>
                    🕊️
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}
