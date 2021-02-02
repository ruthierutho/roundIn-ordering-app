import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import OrderList from "../components/OrderList";
import "../static/ordering-container.css";

const OrderingContainer = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

  useEffect(() => {
    fetch("http://localhost:8080/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useInterval(() => {
    fetch("http://localhost:8080/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, 10000);

  const showDetails = (orderKey) => {
    const order = orders[orderKey];
    setSelectedOrder(order);
  };

  const hideDetails = () => {
    setSelectedOrder(orders[0]);
  };

  return (
    <>
      <h1>Rounders</h1>
      <h3 className="venue-welcome">Welcome Venue Name!</h3>
      <OrderList
        orders={orders}
        showDetails={showDetails}
        selectedOrder={selectedOrder}
        hideDetails={hideDetails}
      ></OrderList>
    </>
  );
};

export default OrderingContainer;
