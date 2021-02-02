import React, { useState, useInterval } from "react";

const MenuContainer = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState();

  useInterval(() => {
    fetch("http://localhost:8080/orders")
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
      {/* <OrderList orders={orders} showDetails={showDetails}></OrderList>
      <OrderDetails selectedOrder={selectedOrder} hideDetails={hideDetails} /> */}
    </>
  );
};

export default MenuContainer;
