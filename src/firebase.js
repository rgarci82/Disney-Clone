import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvY0VeNGLT7OdGm8gPUj9cwRHlOoN_uyg",
  authDomain: "disney-clone-64b2c.firebaseapp.com",
  projectId: "disney-clone-64b2c",
  storageBucket: "disney-clone-64b2c.appspot.com",
  messagingSenderId: "490293844540",
  appId: "1:490293844540:web:1e17659f06556d55e80139",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
