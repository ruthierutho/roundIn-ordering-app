import React from "react";
import OrderList from "../components/OrderList";
import "../static/ordering-container.css";

const OrderingContainer = ({
  orders,
  showOrderDetails,
  selectedOrder,
  hideOrderDetails,
  onUpdateOrder,
  selectedMenu,
}) => {
  return (
    <>
      {selectedMenu ? (
        <OrderList
          orders={orders}
          showDetails={showOrderDetails}
          selectedOrder={selectedOrder}
          hideDetails={hideOrderDetails}
          onUpdateOrder={onUpdateOrder}
          selectedMenu={selectedMenu}
        ></OrderList>
      ) : null}
    </>
  );
};

export default OrderingContainer;
