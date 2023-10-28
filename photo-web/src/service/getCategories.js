import { collection, getDocs } from "firebase/firestore";
import { db } from "./api";

export const getCategories =async ()=>{
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    const listCategory = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return listCategory
}