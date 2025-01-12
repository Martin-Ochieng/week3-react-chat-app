import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/authContext';
import { ChatRoom } from '../chat/chatRoom'; // Adjust the path as needed

const Home = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/login'); // Redirect to /login if no user is logged in
        }
    }, [currentUser, navigate]);

    if (!currentUser) {
        return <div>Redirecting...</div>;
    }

    return (
        <div className="pt-14">
            <div className="centered-container">
                <div className="text-2xl font-bold mb-6 text-center">
                    Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged
                    in.
                </div>
            </div>

            <ChatRoom/> {/* Add the ChatRoom component here */}
        </div>
    );
};

export default Home;
