import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_wER5UCm-f81P-f7wZC10GUkUfx168sA",
  authDomain: "ola-clone-96a47.firebaseapp.com",
  projectId: "ola-clone-96a47",
  storageBucket: "ola-clone-96a47.firebasestorage.app",
  messagingSenderId: "385591988719",
  appId: "1:385591988719:web:f99a521685fbb71476661a",
  measurementId: "G-WN5TRDYYJW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export { app, auth, RecaptchaVerifier, signInWithPhoneNumber };
