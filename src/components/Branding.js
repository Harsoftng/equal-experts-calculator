import React from "react";
import logo from "../assets/img/logo.svg";
import "../assets/css/components/Branding.css";

const Branding = () => {
  return (
    <div role="branding" className="branding">
      <img role="logo" src={logo} alt="[=] Equal Experts" />
    </div>
  );
};

Branding.propTypes = {};

export default Branding;
