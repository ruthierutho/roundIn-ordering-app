import React from "react";
import "../static/order-item.css";
import ShowDetails from "./ShowDetails";

const Order = (props) => {
  const handleClick = (evt) => {
    props.showDetails(props.orderKey);
  };

  return (
    <>
      <li className="item">
        <p>
          <b>{props.time}</b>- {props.customer} - {props.venue}
          <button className="view-button" onClick={handleClick}>
            View
          </button>
          <button className="view-button">Mark as Collected</button>
          <button className="view-button">Update</button>
        </p>
      </li>
      <ShowDetails
        orderId={props.orderId}
        selectedOrder={props.selectedOrder}
        hideDetails={props.hideDetails}
      />
    </>
  );
};

export default Order;
