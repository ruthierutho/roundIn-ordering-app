import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import OrderList from '../components/OrderList';

const OrderingContainer = () => {
    const [orders, setOrders] = useState([]);

    useInterval(() => {
        fetch("http://localhost:8080/orders")
        .then(res => res.json())
        .then((data) => setOrders(data))
    }, 10000);


    return(
        <OrderList orders={orders}></OrderList>
    )
}

export default OrderingContainer;