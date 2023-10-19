import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtX2HEalNCzHYoxz43GZXU06ZY20LJiTg",
  authDomain: "photo-app-82321.firebaseapp.com",
  projectId: "photo-app-82321",
  storageBucket: "photo-app-82321.appspot.com",
  messagingSenderId: "50003249892",
  appId: "1:50003249892:web:e39c73cfa2b7a4f12e3af1",
  measurementId: "G-TDJNB2YG1S",
};

const configApp = initializeApp(firebaseConfig);

export default configApp;
