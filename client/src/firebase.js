import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDDPiEU-6fg0GpGHmSqc1U_fM8WvwBFRps',
  authDomain: 'video-app-b7f3b.firebaseapp.com',
  projectId: 'video-app-b7f3b',
  storageBucket: 'video-app-b7f3b.appspot.com',
  messagingSenderId: '972781561341',
  appId: '1:972781561341:web:c011812108310954ece594'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
