import React from "react";
import PropTypes from "prop-types";
import "./progress.css";

const Progress = ({ percentage }) => {
  return (
    <div className="progress-bar-wrapper">
      <div
        role="progressbar"
        style={{ width: `${percentage}%` }}
        className="progress-bar"
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
