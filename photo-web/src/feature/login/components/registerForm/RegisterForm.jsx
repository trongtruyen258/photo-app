import { FastField, Form, Formik } from "formik";
import InputComponent from "../../../../components/inputFiled/InputComponent";
import { FormGroup } from "reactstrap";
import ButtonComponent from "../../../../components/button";
import "./registerForm.scss";

export default function RegisterForm({ onSubmit, validationSchema }) {
  return (
    <div className="register-form">
      <Formik
        initialValues={{ fullName: "", userName: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => {
          return (
            <Form>
              <FastField
                name="fullName"
                component={InputComponent}
                label="Full Name"
                placeholder="Input your full name"
                type="text"
              />
              <FastField
                name="userName"
                component={InputComponent}
                //
                label="UserName"
                placeholder="Input your UserName"
                type="text"
              />
              <FastField
                name="password"
                component={InputComponent}
                //
                label="Password"
                placeholder="Input your password"
                type="password"
              />
              <FormGroup>
                <ButtonComponent title={"Register"} color={"primary"} />
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
