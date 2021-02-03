import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import OrderList from "../components/OrderList";
import "../static/ordering-container.css";
import Request from '../helpers/Request'

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

  const onUpdateOrder = (order) => {
    const request = new Request();
    console.log(order);
    request.patch('http://localhost:8080/orders/' + order.id, order)
  }

  return (
    <>
      <OrderList
        orders={orders}
        showDetails={showDetails}
        selectedOrder={selectedOrder}
        hideDetails={hideDetails}
        onUpdateOrder={onUpdateOrder}
      ></OrderList>
    </>
  );
};


export default OrderingContainer;
