React Firebase Chat App
Project Overview
This is a React-based group chat application integrated with Firebase Authentication and Firestore. Users can register, log in, or use Google authentication to join a real-time group chat. The chat is limited to displaying the last 25 messages, and it auto-scrolls when new messages are sent.
Features
•	User Authentication: 
o	Email/password registration and login.
o	Google Sign-In support.
•	Real-Time Chat: 
o	Group chat functionality with Firestore.
o	Displays the last 25 messages with auto-scroll on new messages.
•	Responsive Design: 
o	Mobile-friendly interface.
________________________________________
Folder Structure
src/
├── components/
│   ├── auth/
│   │   ├── login/
│   │   │   └── index.jsx        // Login page component
│   │   ├── register/
│   │   │   └── index.jsx        // Registration page component
│   ├── chat/
│   │   └── chatRoom.jsx         // Chatroom component
│   ├── header/
│   │   └── index.jsx            // Header component
│   ├── home/
│       └── index.jsx            // Home page component
├── contexts/
│   └── authContext/
│       └── authContext.jsx      // Provides authentication context
├── firebase/
│   ├── auth.js                  // Firebase authentication utilities
│   ├── firebase.js              // Firebase initialization
├── App.css                      // Global CSS styles
├── App.js                       // Main application entry point
├── App.test.js                  // Default React tests
└── index.css                    // CSS for index.html
└── index.js                     // Renders the React app
________________________________________
Getting Started
Prerequisites
Ensure you have the following installed:
•	Node.js (v16 or later)
•	Firebase CLI (npm install -g firebase-tools)
Installation
1.	Clone the repository:
2.	git clone <repository-url>
3.	cd react-firebase-chat-app
4.	Install dependencies:
5.	npm install
6.	Configure Firebase:
o	Create a Firebase project in the Firebase Console.
o	Enable Authentication (Email/Password and Google).
o	Enable Firestore Database (in test mode).
o	Replace the contents of src/firebase/firebase.js with your Firebase configuration.
Example:
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

export const app = initializeApp(firebaseConfig);
7.	Start the development server:
8.	npm start
9.	Access the application in your browser at http://localhost:3000.
________________________________________
Deployment
1.	Build the project for production:
2.	npm run build
3.	Deploy using Firebase Hosting:
o	Run firebase init to configure Firebase Hosting.
o	Deploy: 
o	firebase deploy
________________________________________
Technologies Used
•	React for building the user interface.
•	Firebase for backend services: 
o	Authentication for user login and registration.
o	Firestore for real-time message storage.
•	Tailwind CSS for styling.
________________________________________
Future Enhancements
•	Add private messaging.
•	Implement user profiles with avatars.
•	Support message deletion/editing.
________________________________________
License
This project is licensed under the MIT License.

