import RegisterForm from "../components/registerForm/RegisterForm";
import * as Yup from "yup";

export default function Register() {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("This filed is required"),
    userName: Yup.string().required("This filed is required"),
    password: Yup.string().required("This filed is required"),
  });
  const onSubmitRegister = (values) => {
    console.log("form register: ", values);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register a new account!</h2>
      <RegisterForm
        onSubmit={(values) => onSubmitRegister(values)}
        validationSchema={validationSchema}
      />
    </div>
  );
}
