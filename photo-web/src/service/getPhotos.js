import { collection, getDocs } from "firebase/firestore";
import { db } from "./api";

export const getPhotos=async()=>{
    const photosSnapshot = await getDocs(collection(db, "photos"));
    const listPhoto = photosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return listPhoto
}
