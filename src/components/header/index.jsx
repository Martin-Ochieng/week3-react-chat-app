import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const { userLoggedIn } = useAuth();

    const handleSignOut = async () => {
        try {
            await doSignOut(); // Sign out the user
        } catch (error) {
            console.error('Sign-out error:', error);
        }
    };

    return (
        <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200">
            {userLoggedIn ? (
                <button
                    onClick={handleSignOut} // Only handle sign-out here
                    className="text-sm text-blue-600 underline"
                >
                    Logout
                </button>
            ) : (
                <>
                    <Link className="text-sm text-blue-600 underline" to="/login">
                        Login
                    </Link>
                    <Link className="text-sm text-blue-600 underline" to="/register">
                        Register New Account
                    </Link>
                </>
            )}
        </nav>
    );
};

export default Header;
