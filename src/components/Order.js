import React from 'react';
import '../static/order-item.css'

const Order = (props, {showDetails}) => {


    const handleClick = (evt) => {
        console.log("Event:", evt);
        // showDetails(evt.target)
    }
 

    return(
        <li  className="item" onClick={handleClick}>
            <p><b>{props.dateTime}</b>- {props.customer} -  {props.venue}</p>
        </li>
    )

}

export default Order;