import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDnc-i1PEYznWMZ2lhpHaGm-TXW3mW-RpU",
    authDomain: "fleximind-2ca90.firebaseapp.com",
    projectId: "fleximind-2ca90",
    storageBucket: "fleximind-2ca90.appspot.com",
    messagingSenderId: "842298118551",
    appId: "1:842298118551:web:1f55426471fbd1936474d2"
};

// Initialize Firebase if it's not already initialized
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication instance
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firebase Storage
const storage = getStorage(app);

const db = getFirestore(app);

export { auth, db, storage };