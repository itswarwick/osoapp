import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtYTHV__fNSALYLT-z-FMll6PgLjnTl-0",
    authDomain: "oso-pwa.firebaseapp.com",
    projectId: "oso-pwa",
    storageBucket: "oso-pwa.appspot.com",
    messagingSenderId: "121366039552",
    appId: "1:121366039552:web:06f4d8546e27bf24aadce5",
    measurementId: "G-ZQTJQZV3SS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
