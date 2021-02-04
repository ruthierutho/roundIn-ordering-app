import React from "react";

const Food = (props) => {

 
  return (
    <li className="item">
      <p>
        <b>{props.name}</b> - {props.price}
       
      </p>
    </li>
  );
};

export default Food;
