import { useSelector } from "react-redux";
import RegisterForm from "../components/registerForm/RegisterForm";
import * as Yup from "yup";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import configApp from "../../../firebase/firebaseConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { themeDark } = useSelector((state) => state.photo);
  const db = getFirestore(configApp);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This filed is required"),
    userName: Yup.string().required("This filed is required"),
    password: Yup.string().required("This filed is required"),
  });
  const onSubmitRegister = async (values) => {
    try {
      const postCollection = collection(db, "users");
      await addDoc(postCollection, values);
      Swal.fire("Register Success!!");
      navigate("/login");
    } catch (error) {
      Swal.fire("Register Failed. Try again!!");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: `${themeDark ? "#f0eaea" : "black"}` }}>
        Register a new account!
      </h2>
      <RegisterForm
        onSubmit={(values) => onSubmitRegister(values)}
        validationSchema={validationSchema}
        themeDark={themeDark}
      />
    </div>
  );
}
