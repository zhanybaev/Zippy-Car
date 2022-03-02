import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyB1lfnDG3ysy1wL5SWH1c7DwUwipKo8Zv8",
    authDomain: "zippy-car.firebaseapp.com",
    projectId: "zippy-car",
    storageBucket: "zippy-car.appspot.com",
    messagingSenderId: "54473382532",
    appId: "1:54473382532:web:e04d73cc4f1168c88580d1",
    measurementId: "G-D9BREKSCG1"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;