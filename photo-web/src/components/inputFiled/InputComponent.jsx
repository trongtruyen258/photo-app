import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

export default function InputComponent({
  type,
  field,
  form,
  label,
  placeholder,
}) {
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];
  // console.log(errors, touched, "showErr", showErr);
  // console.log(form);
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={name}
        placeholder={placeholder}
        invalid={showErr}
        type={type}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}
