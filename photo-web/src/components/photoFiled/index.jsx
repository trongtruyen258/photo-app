import { FormFeedback, FormGroup, Label } from "reactstrap";
import ButtonComponent from "../button";
import { ErrorMessage } from "formik";
import { useEffect, useState } from "react";

export default function PhotoFiled({ field, form, label, noImage }) {
  const { errors, touched } = form;
  const { name, value, onBlur, onChange } = field;
  const showErr = errors[name] && touched[name];
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    setImgUrl(value);
  }, [value]);
  const randomUrlPhoto = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/id/${randomId}/250/250`;
  };
  const clickRandomPhoto = () => {
    const randomUrl = randomUrlPhoto();
    // console.log(randomUrl);
    form.setFieldValue(name, randomUrl);
  };
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <div id={name}>
        <ButtonComponent
          onBlur={onBlur}
          title={"Random Photo"}
          color={"primary"}
          outline={true}
          handleClick={clickRandomPhoto}
        />
      </div>
      <div className={`div-photo ${showErr ? "is-invalid" : null}`}>
        <img
          src={imgUrl ? imgUrl : noImage}
          alt="random"
          onError={() => setImgUrl(noImage)}
        />
      </div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}
