import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByLWkFIs9mNQj3T427dQDZxGFcOZO_dPA",
  authDomain: "travel-app-db6db.firebaseapp.com",
  projectId: "travel-app-db6db",
  storageBucket: "travel-app-db6db.appspot.com",
  messagingSenderId: "407148635079",
  appId: "1:407148635079:web:912167808224eceda2efe2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
