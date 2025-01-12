# React Firebase Chat App

## Project Overview
This is a React-based group chat application integrated with Firebase Authentication and Firestore. Users can register, log in, or use Google authentication to join a real-time group chat.

## Features
- **User Authentication:**
  - Email/password registration and login.
  - Google Sign-In support.
- **Real-Time Chat:**
  - Group chat functionality with Firestore.
  - Displays the last 25 messages with auto-scroll on new messages.
- **Responsive Design:**
  - Mobile-friendly interface.

```markdown
# Folder Structure

```
```
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
├── index.css                    // CSS for index.html
└── index.js                     // Renders the React app

```


```markdown
# Getting Started

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **Firebase CLI**  
  Install it globally:  
  ```bash
  npm install -g firebase-tools
  ```

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Martin-Ochieng/week3-react-chat-app.git
   cd react-firebase-chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication** (e.g., Email/Password and Google).
   - Enable the **Firestore Database** (set it to test mode).
   - Replace the contents of `src/firebase/firebase.js` with your Firebase configuration.

   **Example `firebase.js`:**
   ```javascript
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
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. Access the application in your browser at:  
   [http://localhost:3000](http://localhost:3000)

---

## Deployment

1. **Build the project for production:**
   ```bash
   npm run build
   ```

2. **Deploy using Firebase Hosting:**
   - Run the Firebase initialization command:  
     ```bash
     firebase init
     ```
   - Deploy the app:  
     ```bash
     firebase deploy
     ```

---

## Technologies Used
- **React**: For building the user interface.
- **Firebase**: Backend services for:
  - **Authentication**: User login and registration.
  - **Firestore**: Real-time message storage.
- **Tailwind CSS**: For styling.

---

## Future Enhancements
- Add private messaging.
- Implement user profiles with avatars.
- Support message deletion/editing.

---

## License
This project is licensed under the **MIT License**.
```
