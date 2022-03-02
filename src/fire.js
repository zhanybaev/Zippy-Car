import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// const firebaseConfig = {
//     apiKey: "AIzaSyB1lfnDG3ysy1wL5SWH1c7DwUwipKo8Zv8",
//     authDomain: "zippy-car.firebaseapp.com",
//     projectId: "zippy-car",
//     storageBucket: "zippy-car.appspot.com",
//     messagingSenderId: "54473382532",
//     appId: "1:54473382532:web:e04d73cc4f1168c88580d1",
//     measurementId: "G-D9BREKSCG1"
// };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;