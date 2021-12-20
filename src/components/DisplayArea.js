import React from "react";
import "../assets/css/components/DisplayArea.css";
import PropTypes from "prop-types";

const DisplayArea = ({ data }) => {
  return (
    <div className="display-area" role="display">
      {data}
    </div>
  );
};

DisplayArea.propTypes = {
  data: PropTypes.string,
};

DisplayArea.defaultProps = {
  data: "0",
};

export default DisplayArea;
