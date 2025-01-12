import {auth} from "./firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);


  // add user to firestore
};

export const doSignOut = () => {
  return auth.signOut();
};

//TODO : Will add password reset, password change, email verification later



// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// };
//
// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };
//
// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });
// };
