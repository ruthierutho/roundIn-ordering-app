import React from 'react';
import Order from './Order';
import '../static/order-list.css';

const OrderList = ({orders, showDetails}) => {


  


    return(
        <>
        <div className="order-list-box">
        <h4>Open Orders</h4>
        <ul>
            {orders.map((order, index) => {
                return(
                    <Order 
                        key={index}
                        orderKey={index}
                        time={order.collectionTime}
                        customer={order.customer.name}
                        venue={order.venue.name}
                        showDetails={showDetails}
                    ></Order>
                )
            })}
        </ul>
        </div>
        </>

    )
}

export default OrderList;