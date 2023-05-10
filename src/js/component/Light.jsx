import React from "react";

const Light = (props) => {
  return (
    <div
      className={
        "rounded-circle street-light mt-1" +
        (props.active === props.color ? " selected" : " ")
      }
      style={{ backgroundColor: props.color }}
    ></div>
  );
};

export default Light;
