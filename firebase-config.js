// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5ahePpuAksgY6dDLfAtNuwGOwe4Xbe7E",
  authDomain: "luxflix-2455a.firebaseapp.com",
  projectId: "luxflix-2455a",
  storageBucket: "luxflix-2455a.appspot.com",
  messagingSenderId: "166343472796",
  appId: "1:166343472796:web:373b1fa92ef47305da1f59"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
