import { useEffect,  useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhotoForm from "../components/photoForm";
import { Images } from "../../../constants/images";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { categoriesAction } from "../../../redux/action/categoryAction/categoryAction";
import { getCategories } from "../../../service/getCategories";
import { db } from "../../../service/api";

export default function AddEditPage() {
  const [titleForm, setTitleForm] = useState("");
  const [initValues, setInitValues] = useState({});
  const [titleButton, setTitleButton] = useState("");
  const { listCategory } = useSelector((state) => state.category);
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { themeDark } = useSelector((state) => state.photo);

  const fetchDataById = async (id) => {
    const item = doc(db, "photos", id);
    const itemSnapshot = await getDoc(item);
    const photoSelected = { id: itemSnapshot.id, ...itemSnapshot.data() };
   
    setTitleForm(`Update for photo ${photoSelected.title}`);
    setInitValues({
      title: photoSelected.title,
      categoryId: photoSelected.categoryId,
      imgUrl: photoSelected.imgUrl,
    });
  };

  useEffect(() => {
    if (listCategory) {
    getCategories().then(res=>{dispatch(categoriesAction(res))})
      
    }
    if (param.id) {
      fetchDataById(param.id);
      setTitleButton("Update");
    } else {
      setTitleForm("Add a new photo");
      setInitValues({ title: "", categoryId: null, photo: "" });
      setTitleButton("Add to album");
    }
    
  }, [param]);
  const onSubmitForm = async (values) => {
    if (param.id) {
      try {
        const itemDoc = doc(db, "photos", param.id);
        await setDoc(itemDoc, values, { merge: true });
        Swal.fire("Update Success!!");
      } catch (error) {
        Swal.fire("Update Failed. Try again!!");
      }
    } else {
      try {
        const postCollection = collection(db, "photos");
        await addDoc(postCollection, values);
        Swal.fire("Create Success!!");
      } catch (error) {
        Swal.fire("Create Failed. Try again!!");
      }
    }
    navigate("/home");
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("This field is required"),
    categoryId: Yup.number().required("This field is required"),
    imgUrl: Yup.string().required("This filed is required"),
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: `${themeDark ? "#f0eaea" : "black"}` }}>
        {titleForm}
      </h2>
      {JSON.stringify(initValues) !== "{}" && JSON.stringify(listCategory)!=="[]" && (
        <PhotoForm
          initValues={initValues}
          onSubmit={onSubmitForm}
          noImage={Images.noImage}
          validationSchema={validationSchema}
          options={listCategory}
          titleButton={titleButton}
          themeDark={themeDark}
        />
      )}
    </div>
  );
}
