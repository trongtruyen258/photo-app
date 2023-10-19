import { Button } from "reactstrap";

export default function ButtonComponent({
  title,
  color,
  handleClick,
  outline,
  onBlur,
}) {
  return (
    <Button
      color={color}
      onClick={handleClick}
      outline={outline}
      onBlur={onBlur}
    >
      {title}
    </Button>
  );
}
