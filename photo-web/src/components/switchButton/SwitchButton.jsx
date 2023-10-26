import { useLayoutEffect, useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";

SwitchButton.propTypes = {
  onChange: PropTypes.func,
};
SwitchButton.defaultProps = {
  onChange: null,
  leftLabel: <div>Off</div>,
  rightLabel: <div>On</div>,
};

export default function SwitchButton(props) {
  const { leftLabel, rightLabel, onChange, defaultChecked } = props;
  const [checked, setChecked] = useState(false);
  useLayoutEffect(() => {
    if (defaultChecked) setChecked(true);
  }, [defaultChecked]);
  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange(e);
  };
  return (
    <div className="switch-button">
      <label>
        <div className={`track-button ${checked ? "checked" : ""}`}>
          <div className="button">{checked ? rightLabel : leftLabel}</div>
        </div>
        <input
          type="checkbox"
          onChange={handleChange}
          className="check"
          checked={checked}
        />
      </label>
    </div>
  );
}
