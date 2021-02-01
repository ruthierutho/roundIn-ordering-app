import React from 'react';
import '../static/order-item.css'

const Order = (props) => {


    const handleClick = (evt) => {
        props.showDetails(props.orderKey)
    }
 

    return(
        <li  className="item" onClick={handleClick}>
            <p><b>{props.dateTime}</b>- {props.customer} -  {props.venue}</p>
        </li>
    )

}

export default Order;