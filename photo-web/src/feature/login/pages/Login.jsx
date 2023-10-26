import { collection, getDocs, getFirestore } from "firebase/firestore";
import LoginForm from "../components/loginForm/LoginForm";
import * as Yup from "yup";
import configApp from "../../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export default function Login() {
  const db = getFirestore(configApp);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    userName: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });
  const { themeDark } = useSelector((state) => state.photo);

  const onSubmitLogin = async (values) => {
    const usersSnapshot = await getDocs(collection(db, "users"));
    const listUser = usersSnapshot.docs.map((doc) => ({ ...doc.data() }));
    // const users = listUser.map(({ userName, password }) => ({
    //   userName,
    //   password,
    // }));

    if (
      listUser.some(
        (user) =>
          user.userName === values.userName && user.password === values.password
      )
    ) {
      localStorage.setItem("isLogin", JSON.stringify(true));
      navigate("/");
    } else {
      Swal.fire("Login failed. Try again!!");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: `${themeDark ? "#f0eaea" : "black"}` }}>
        Login to your account!
      </h2>
      <LoginForm
        themeDark={themeDark}
        onSubmit={onSubmitLogin}
        validationSchema={validationSchema}
      />
    </div>
  );
}
