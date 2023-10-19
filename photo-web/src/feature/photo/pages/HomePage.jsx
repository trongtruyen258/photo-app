import { Col, Row } from "reactstrap";
import PhotoCard from "../components/photoCard";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useEffect } from "react";
import configApp from "../../../firebase/firebaseConfig";
import { categoriesAction } from "../../../redux/action/categoryAction/categoryAction";
import { listPhotoAction } from "../../../redux/action/photoAction/photoAction";

export default function HomePage() {
  const navigate = useNavigate();
  const { listCategory } = useSelector((state) => state.category);
  const { listPhoto } = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  const db = getFirestore(configApp);
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  const fetchData = async () => {
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    const listCategory = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const photosSnapshot = await getDocs(collection(db, "photos"));
    const listPhoto = photosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(categoriesAction(listCategory));
    dispatch(listPhotoAction(listPhoto));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClickDelete = (id) => {
    if (!isLogin) {
      Swal.fire("You are not logged in!");
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const itemDoc = doc(db, "photos", id);
          await deleteDoc(itemDoc);
          await fetchData();
          Swal.fire("Deleted!", "Your photo has been deleted.", "success");
        }
      });
    }
  };
  const handleClickEdit = (photo) => {
    if (!isLogin) {
      Swal.fire("You are not logged in!");
    } else {
      navigate(`/edit/${photo.id}`);
    }
  };
  const findCategory = (categoryId) => {
    return listCategory.find((category) => category.value === categoryId)
      ?.label;
  };
  return (
    <Row>
      {listPhoto.map((photo, index) => (
        <Col key={index} xs="12" md="6" lg="3">
          <PhotoCard
            photoCard={photo}
            category={() => findCategory(photo.categoryId)}
            clickEdit={() => handleClickEdit(photo)}
            clickDelete={() => handleClickDelete(photo.id)}
          />
        </Col>
      ))}
    </Row>
  );
}
