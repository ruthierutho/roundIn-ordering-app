import React from 'react';
import Order from './Order';
import '../static/order-list.css';

const OrderList = ({orders, showDetails, selectedOrder, hideDetails, onUpdateOrder, selectedMenu}) => {


  

    return(
        <>
        <div className="order-list-box">
        <h3>Open Orders</h3>
        <ul>
            {orders.map((order, index) => {
                return(
                    <Order 
                        key={index}
                        orderKey={index}
                        orderId={order.id}
                        time={order.collectionTime}
                        customer={order.customer.name}
                        venue={order.venue.name}
                        collected={order.collected}
                        showDetails={showDetails}
                        selectedOrder={selectedOrder}
                        hideDetails={hideDetails}
                        onUpdateOrder={onUpdateOrder}
                        selectedMenu={selectedMenu}
                    ></Order>
                )
            })}
        </ul>
        </div>
        </>

    )
}

export default OrderList;