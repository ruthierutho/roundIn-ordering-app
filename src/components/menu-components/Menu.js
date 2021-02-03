import React from "react";
import ShowMenuDetails from "./ShowMenuDetails";

const Menu = (props) => {
  const handleClick = (evt) => {
    props.showDetails(props.menuKey);
  };

  return (
    <li className="item">
      <p>
        <b>Menu Name: {props.name}</b>
      </p>
      <button className="view-button" onClick={handleClick}>
        View
      </button>
      <ShowMenuDetails
        menuId={props.menuId}
        selectedMenu={props.selectedMenu}
        hideDetails={props.hideDetails}
      />
    </li>
  );
};

export default Menu;
