//tooltips to appear in the studio!

import React from "react";
import "../styles/tooltip.css";

function Tooltip({ text }) {
  return (
    <span className="tooltip-container">
      <span className="tooltip-icon">?</span>
      <span className="tooltip-text">{text}</span>
    </span>
  );
}

export default Tooltip;
