import React from "react";

const Shape = ({ type }) => {
  return (
    <div className="front">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
      >
        <rect width="100%" height="100%" fill="#126E82" />
        {type === "cercle" ? (
          <circle cx="100" cy="100" r="60" fill="#E7D9EA" />
        ) : type === "square" ? (
          <rect x="53" y="60" width="90" height="90" fill="#16C79A" />
        ) : (
          <polygon points="100 50, 150 150, 50 150" fill="#A12568" />
        )}
      </svg>
    </div>
  );
};

export default Shape;
