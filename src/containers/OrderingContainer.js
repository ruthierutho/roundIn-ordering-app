import React, { useEffect, useState } from 'react';
import OrderList from '../components/OrderList';

const OrderingContainer = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/orders")
        .then(res => res.json())
        .then((data) => setOrders(data))
    }, []);


    return(
        <OrderList orders={orders}></OrderList>
    )
}

export default OrderingContainer;