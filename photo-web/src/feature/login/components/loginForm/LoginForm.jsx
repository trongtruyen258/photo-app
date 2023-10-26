import { FastField, Form, Formik } from "formik";
import InputComponent from "../../../../components/inputFiled/InputComponent";
import "./loginForm.scss";
import { FormGroup } from "reactstrap";
import ButtonComponent from "../../../../components/button";
import { Link } from "react-router-dom";

export default function LoginForm({ onSubmit, validationSchema, themeDark }) {
  return (
    <div className={`form-login ${themeDark ? "form-login-theme-dark" : ""}`}>
      <Formik
        initialValues={{ userName: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form>
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
                <ButtonComponent title={"Login"} color={"primary"} />
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
      <div>
        <Link to={"/register"}>Register a new account!!</Link>
      </div>
    </div>
  );
}
