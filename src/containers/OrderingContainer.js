import React, { useEffect, useState } from 'react';
import OrderList from '../components/OrderList';
import OrderDetails from '../components/OrderDetails';
import '../static/ordering-container.css'

const OrderingContainer = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/orders")
        .then(res => res.json())
        .then((data) => setOrders(data))
    }, []);

    const showDetails = (order) => {
        setSelectedOrder(order)
        
    }

    return(
        <>
        <h1>Rounders</h1>
        <h3>Welcome Venue Name!</h3>
        <OrderList orders={orders} showDetails={(order) => showDetails(order)}></OrderList>
        <OrderDetails selectedOrder={selectedOrder}/>

        </>
    )
}

export default OrderingContainer;