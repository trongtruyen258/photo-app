import { getFirestore } from "firebase/firestore";
import configApp from "../firebase/firebaseConfig";

export const db = getFirestore(configApp);
