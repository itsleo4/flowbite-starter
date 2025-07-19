// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA5ahePpuAksgY6dDLfAtNuwGOwe4Xbe7E",
  authDomain: "luxflix-2455a.firebaseapp.com",
  projectId: "luxflix-2455a",
  storageBucket: "luxflix-2455a.appspot.com",
  messagingSenderId: "166343472796",
  appId: "1:166343472796:web:373b1fa92ef47305da1f59",
  measurementId: "G-4HSDMBK1BR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
