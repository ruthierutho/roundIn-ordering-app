import React,{ useState } from 'react';
import '../static/order-item.css';
import ShowDetails from './ShowDetails'

const Order = (props) => {
    
    const [update, setUpdate] = useState(false)
    
    const handleClick = (evt) => {
        setUpdate(false)
        props.showDetails(props.orderKey)
    }
    
    const handleUpdate = () => {
        setUpdate(true)
        props.showDetails(props.orderKey)
    }

 
    return(
        <>
        <li  className="item" >
            <p><b>{props.time}</b>- {props.customer} -  {props.venue} - <b> {props.collected === true ? "COLLECTED" : "TO COLLECT"} </b>
            <button className="view-button" onClick={handleClick}>View</button >
            <button className="view-button" onClick={handleUpdate}>Update</button>
    
            </p>

        </li>
            <ShowDetails orderId={props.orderId} selectedOrder={props.selectedOrder} hideDetails={props.hideDetails} update={update} onUpdateOrder={props.onUpdateOrder} selectedMenu={props.selectedMenu}/>
        </>
    )

}

export default Order;
