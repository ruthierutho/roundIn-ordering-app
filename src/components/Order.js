import React from 'react';
import '../static/order-item.css'

const Order = (props) => {


    const handleClick = (evt) => {
        props.showDetails(props.orderKey)
    }
 

    return(
        <li  className="item" >
            <p><b>{props.time}</b>- {props.customer} -  {props.venue} <button className="view-button" onClick={handleClick}>View</button></p>
        </li>
    )

}

export default Order;