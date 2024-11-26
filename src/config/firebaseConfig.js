import {initializeApp} from '@react-native-firebase/app';
import {getFirestore} from '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPB2wVwg7apT-xYT8PILdEbRlKJKi6vN8",
    authDomain: "todolist-51c44.firebaseapp.com",
    projectId: "todolist-51c44",
    storageBucket: "todolist-51c44.firebasestorage.app",
    messagingSenderId: "467097072655",
    appId: "1:467097072655:web:8dcfef4c066154f3ad1f7a",
    measurementId: "G-2HJTY48MX2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);