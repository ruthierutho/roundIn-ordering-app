import React from 'react';
import Order from './Order';
import '../static/order-list.css';

const OrderList = ({orders}) => {

    return(
        <>
        <div className="order-list-box">
        <h4>Open Orders</h4>
        <div>
            {orders.map((order, index) => {
                return(
                    <Order
                        key={index}
                        dateTime={order.date}
                        customer={order.customer.name}
                        venue={order.venue.name}
                        
                    ></Order>
                )
            })}
        </div>
        </div>
        </>

    )
}

export default OrderList;