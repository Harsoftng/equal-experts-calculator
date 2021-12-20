import React from "react";
import PropTypes from "prop-types";
import "../assets/css/components/Button.css";

const Button = ({ label, value, size, action, onClick }) => {
  return (
    <button
      role="button"
      className="button"
      data-value={value}
      data-size={size}
      data-action={action}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.number,
  action: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  size: 1,
  action: false,
};

export default Button;
