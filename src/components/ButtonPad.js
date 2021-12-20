import React from "react";
import PropTypes from "prop-types";
import {} from "../assets/css/components/ButtonPad.css";

const ButtonPad = ({ children }) => {
  return (
    <div role="container" className="button-pad">
      {children}
    </div>
  );
};

ButtonPad.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonPad;
