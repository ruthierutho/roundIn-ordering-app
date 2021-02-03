import React from "react";
import MenuList from "../components/menu-components/MenuList";

const MenuContainer = ({
  selectedVenue,
  menus,
  selectedMenu,
  hideMenuDetails,
  showMenuDetails,
}) => {
  return (
    <>
      <MenuList
        menus={menus}
        showDetails={showMenuDetails}
        selectedMenu={selectedMenu}
        hideDetails={hideMenuDetails}
      ></MenuList>
    </>
  );
};

export default MenuContainer;
