import React from "react";
import MenuDetails from "./MenuDetails";

const ShowMenuDetails = ({ selectedMenu, hideDetails, menuId }) => {
  if (selectedMenu == null) {
    return <p></p>;
  } else {
    if (menuId === selectedMenu.id) {
      return (
        <MenuDetails selectedMenu={selectedMenu} hideDetails={hideDetails} />
      );
    } else {
      return null;
    }
  }
};

export default ShowMenuDetails;
