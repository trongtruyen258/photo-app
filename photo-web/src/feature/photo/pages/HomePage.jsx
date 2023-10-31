import { Col, Row } from "reactstrap";
import PhotoCard from "../components/photoCard";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import configApp from "../../../firebase/firebaseConfig";
import { categoriesAction } from "../../../redux/action/categoryAction/categoryAction";
import { listPhotoAction } from "../../../redux/action/photoAction/photoAction";
import { getPhotos } from "../../../service/getPhotos";
import { getCategories } from "../../../service/getCategories";
import { itemsToShow } from "../../../constants/constants";
import MoveToTop from "../../../components/moveToTop";

export default function HomePage() {
  const [itemsToDisplay, setItemsToDisplay] = useState(itemsToShow);
  const navigate = useNavigate();
  const { listCategory } = useSelector((state) => state.category);
  const { listPhoto } = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  const db = getFirestore(configApp);
  const fetchData = async () => {
    getPhotos().then((res) => {
      dispatch(listPhotoAction(res));
    });
    getCategories().then((res) => {
      dispatch(categoriesAction(res));
    });
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
  const handleShowMore = () => {
    if (itemsToDisplay + itemsToShow > listPhoto.length) {
      setItemsToDisplay(listPhoto.length);
    } else {
      setItemsToDisplay(itemsToDisplay + itemsToShow);
    }
  };
  const handleShowLess = () => {
    setItemsToDisplay(itemsToShow);
  };
  return (
    <>
      <Row>
        {listPhoto.slice(0, itemsToDisplay).map((photo, index) => (
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
      <Row>
        {listPhoto.length > itemsToShow &&
          (itemsToDisplay < listPhoto.length ? (
            <p className="bnt-show" onClick={handleShowMore}>
              Show more
            </p>
          ) : (
            <p className="bnt-show" onClick={handleShowLess}>
              Show less
            </p>
          ))}
      </Row>
      <MoveToTop />
    </>
  );
}
