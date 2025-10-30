// Firebase Configuration Example
// Copy this file to firebase-config.js and fill in your Firebase project credentials

// To get your Firebase config:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select an existing one
// 3. Go to Project Settings > General
// 4. Scroll down to "Your apps" and click on the web icon (</>)
// 5. Register your app and copy the config object

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Instructions:
// 1. Enable Authentication in Firebase Console:
//    - Go to Authentication > Sign-in method
//    - Enable "Email/Password"
//    - Enable "Google" and configure OAuth consent screen
//
// 2. Enable Firestore Database:
//    - Go to Firestore Database > Create database
//    - Start in test mode (you can change rules later)
//
// 3. Update auth.js with your config:
//    - Replace the firebaseConfig object in auth.js with your credentials
//    - Or import from firebase-config.js if you prefer

