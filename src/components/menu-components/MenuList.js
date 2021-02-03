import React from "react";
import Menu from "./Menu";

const MenuList = ({ menus, showDetails, selectedMenu, hideDetails }) => {
  return (
    <>
      <div className="menu-list-box">
        <h4>Menus</h4>
        <ul>
          {menus.map((menu, index) => {
            return (
              <Menu
                key={index}
                menuKey={index}
                menuId={menu.id}
                name={menu.name}
                drinks={menu.drinks}
                foods={menu.foods}
                showDetails={showDetails}
                selectedMenu={selectedMenu}
                hideDetails={hideDetails}
              ></Menu>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
