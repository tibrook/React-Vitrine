import React from "react";
import { NavLink } from "react-router-dom";
const Buttons = (props) => {
  console.log(props);
  return (
    <div className="scroll-bottom">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>&#10092;</span>
        </NavLink>
      )}
      {props.rigth && (
        <NavLink to={props.left} className="left hover">
          <span>&#10092;</span>
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;
