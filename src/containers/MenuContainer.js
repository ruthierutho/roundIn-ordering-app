import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import MenuDetails from "../components/menu-components/MenuDetails";
import MenuList from "../components/menu-components/MenuList";

const MenuContainer = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  useInterval(() => {
    fetch("http://localhost:8080/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, 10000);

  const showDetails = (menuKey) => {
    const menu = menus[menuKey];
    setSelectedMenu(menu);
  };

  const hideDetails = () => {
    setSelectedMenu(null);
  };

  return (
    <>
      <MenuList menus={menus} showDetails={showDetails}></MenuList>
      <MenuDetails selectedMenu={selectedMenu} hideDetails={hideDetails} />
    </>
  );
};

export default MenuContainer;
