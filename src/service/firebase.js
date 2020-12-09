import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLCL3M_F5g9bBHSnJXcqb2myQGVqsOrAc",
    authDomain: "card-maker-93359.firebaseapp.com",
    projectId: "card-maker-93359",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp