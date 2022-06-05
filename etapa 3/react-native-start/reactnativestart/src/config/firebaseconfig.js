import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH7LcudvmLxZCtaZszwT6NRsNkpkJm3A0",
  authDomain: "tarefas-bba46.firebaseapp.com",
  projectId: "tarefas-bba46",
  storageBucket: "tarefas-bba46.appspot.com",
  messagingSenderId: "971326652840",
  appId: "1:971326652840:web:40db520febfa705ac19d9d"

};

// Initialize Firebase
export const firebase =  initializeApp(firebaseConfig);
export const Database = getFirestore(firebase);

