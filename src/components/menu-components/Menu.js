import React from "react";

const Menu = (props) => {
  const handleClick = (evt) => {
    props.showDetails(props.menuKey);
  };

  return (
    <li className="item">
      <p>
        <b>Menu Name: {props.name}</b>
      </p>
      <p>Venue: {props.venue}</p>
      <button className="view-button" onClick={handleClick}>
        View
      </button>
    </li>
  );
};

export default Menu;
