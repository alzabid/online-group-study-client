
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCgRu5e5YqtwGvHIZ_Z_R7yIQOL9XGrD54",
  authDomain: "online-group-study-a11.firebaseapp.com",
  projectId: "online-group-study-a11",
  storageBucket: "online-group-study-a11.appspot.com",
  messagingSenderId: "777039250703",
  appId: "1:777039250703:web:5cd942ca7757121956aa7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
