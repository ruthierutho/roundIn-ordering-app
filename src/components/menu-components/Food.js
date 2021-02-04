import React from "react";

const Food = (props) => {

 
  return (
    <li className="item">
      <p>
        <b>{props.name}</b> - £{(props.price / 100).toFixed(2)}
       
      </p>
    </li>
  );
};

export default Food;
