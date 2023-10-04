import {    initializeApp } 
            from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {    getFirestore,
            collection,
            addDocs,
            onSnapshot } 
            from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const collection_calls = collection(fireStore, "calls");