import React from "react";

const Drink = (props) => {
  return (
    <li className="item">
      <p>
        <b>{props.name}</b> - {props.price}
      </p>
    </li>
  );
};

export default Drink;
