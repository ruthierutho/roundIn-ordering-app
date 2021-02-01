import React, { useEffect, useState } from 'react';
import OrderList from '../components/OrderList';
import '../static/ordering-container.css'

const OrderingContainer = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/orders")
        .then(res => res.json())
        .then((data) => setOrders(data))
    }, []);


    return(
        <>
        <h1>Rounders</h1>
        <h3>Welcome Venue Name!</h3>
        <OrderList orders={orders}></OrderList>
        </>
    )
}

export default OrderingContainer;