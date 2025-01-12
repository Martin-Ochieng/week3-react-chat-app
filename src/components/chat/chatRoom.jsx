import "../../App.css";
import React, { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from "../../firebase/firebase";
import { getFirestore, collection, query, orderBy, addDoc, serverTimestamp } from "firebase/firestore";

// Initialize Firestore
const firestore = getFirestore();
function ChatMessage(props) {
    const { text, uid, photoURL, senderName } = props.message;

    // Check if the user is the current user (for message styling)
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img
                src={photoURL && photoURL.trim() !== '' ? photoURL : 'https://img.icons8.com/?size=100&id=bzanxGcmX3R8&format=png&color=000000'}
                alt="User Avatar"
            />
            <div>
                <strong>{senderName}</strong> {/* Display name or email */}
                <p>{text}</p> {/* The message text */}
            </div>
        </div>
    );
}



export function ChatRoom() {
    const dummy = useRef();
    const messagesRef = collection(firestore, 'messages');
    const messagesQuery = query(messagesRef, orderBy('createdAt'), /* limit(25) */);

    const [messages] = useCollectionData(messagesQuery, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL, displayName, email } = auth.currentUser;

        // Get the user's displayName or email, fall back to 'Anonymous' if not available
        const senderName = displayName || email || 'Anonymous';

        await addDoc(messagesRef, {
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL,
            senderName,  // Save the sender's name or email
        });

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="chatroom-container">
            <main>
                {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
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
        </div>
    );
}

