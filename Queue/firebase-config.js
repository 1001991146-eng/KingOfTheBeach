// firebase-config.js
// Fill in your Firebase project configuration here:
const firebaseConfig = {
  apiKey: "AIzaSyCEwlTp4Yo2boARCieNTITIT0MkMNZiOv0",
  authDomain: "king-of-the-beach-queue.firebaseapp.com",
  projectId: "king-of-the-beach-queue",
  storageBucket: "king-of-the-beach-queue.firebasestorage.app",
  messagingSenderId: "611422584946",
  appId: "1:611422584946:web:ddb42c1d933937090c82eb"
};

// Export for browser accessibility
if (typeof window !== 'undefined') {
  window.firebaseConfig = firebaseConfig;
}
