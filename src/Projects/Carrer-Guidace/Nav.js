import React from "react";
const Nav = ({ category, dataChange }) => {
  return (
    <div className="nav-box">
      <div className="naver">
        {category.map((field, indx) => {
          return (
            <div
              key={indx}
              className="nav-contain border active"
              id={field}
              onClick={(e) => dataChange(e, field)}
            >
              <span id={field}>{field}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
