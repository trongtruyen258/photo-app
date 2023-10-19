import { ErrorMessage } from "formik";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

export default function SelectComponent({
  field,
  form,
  label,
  placeholder,
  options,
}) {
  const { name, value, onChange, onBlur } = field;
  const selectOption = options.find((option) => option.value === value);
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];
  // console.log(errors, touched, "showErr", showErr);
  const handleChange = (option) => {
    const selectedValue = option ? option.value : option;
    onChange({ target: { name: name, value: selectedValue } });
  };

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Select
        id={name}
        name={name}
        value={selectOption}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder={placeholder}
        options={options}
        className={showErr ? "is-invalid" : null}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}
