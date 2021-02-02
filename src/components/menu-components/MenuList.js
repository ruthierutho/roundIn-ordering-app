import React from "react";
import Menu from "./Menu";

const MenuList = ({ menus, showDetails }) => {
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
                name={menu.name}
                venue={menu.venues[0].name}
                drinks={menu.drinks}
                foods={menu.foods}
                showDetails={showDetails}
              ></Menu>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
