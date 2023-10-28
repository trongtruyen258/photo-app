import { FastField, Form, Formik } from "formik";
import InputComponent from "../../../../components/inputFiled/InputComponent";
import SelectComponent from "../../../../components/selectField";
import PhotoFiled from "../../../../components/photoFiled";
import { FormGroup } from "reactstrap";
import ButtonComponent from "../../../../components/button";
import "./photoForm.scss";

export default function PhotoForm({
  initValues,
  onSubmit,
  noImage,
  validationSchema,
  options,
  titleButton,
  themeDark,
}) {
  
  return (
    <div className={`photo-form ${themeDark ? "photo-form-theme-dark" : ""}`}>
      <Formik
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form>
              <FastField
                name="title"
                component={InputComponent}
                label="Title"
                placeholder="Input photo title"
              />

              <FastField
                name="categoryId"
                component={SelectComponent}
                label="Category"
                placeholder="Select Category"
                options={options}
              />
              <FastField
                name="imgUrl"
                component={PhotoFiled}
                label="Photo"
                noImage={noImage}
              />
              <FormGroup className="button">
                <ButtonComponent title={titleButton} color={"primary"} />
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
