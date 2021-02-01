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

    const showDetails = (orderKey) => {
        const order = orders[orderKey]
        setSelectedOrder(order)
        
    }

    const hideDetails = () => {
        
        setSelectedOrder(null)
    }

    return(
        <>
        <h1>Rounders</h1>
        <h3 className="venue-welcome">Welcome Venue Name!</h3>
        <OrderList orders={orders} showDetails={showDetails}></OrderList>
        <OrderDetails selectedOrder={selectedOrder} hideDetails={hideDetails}/>

        </>
    )
}

export default OrderingContainer;