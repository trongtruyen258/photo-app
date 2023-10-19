import { FastField, Form, Formik } from "formik";
import InputComponent from "../../../../components/inputFiled/InputComponent";
import "./loginForm.scss";
import { FormGroup } from "reactstrap";
import ButtonComponent from "../../../../components/button";

export default function LoginForm({ onSubmit, validationSchema }) {
  return (
    <div className="form-login">
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
        <a href="/register">Register a new account!!</a>
      </div>
    </div>
  );
}
