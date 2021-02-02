import React from 'react';
import OrderDetails from './OrderDetails'

const ShowDetails = ({selectedOrder, hideDetails, orderId}) => {
  
  if (selectedOrder == null) {
    return <p></p>
  }
  else {

    if (orderId == selectedOrder.id) {
      return (<OrderDetails selectedOrder={selectedOrder} hideDetails={hideDetails} />);
    }
    else {
      return null
    }
  }
}
 
export default ShowDetails;