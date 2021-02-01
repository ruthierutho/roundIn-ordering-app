import React from 'react';
import '../static/order-item.css'

const Order = (props) => {

    return(
        <div className="item">
            <h5>{props.dateTime}</h5>
            <p>{props.customer}</p>
            <p>{props.venue}</p>

        </div>
    )

}

export default Order;