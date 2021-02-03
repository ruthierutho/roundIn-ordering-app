import React from 'react';
import OrderDetails from './OrderDetails';
import OrderForm from './OrderForm';

const ShowDetails = ({selectedOrder, hideDetails, orderId, update, onUpdateOrder}) => {
  
  if (selectedOrder == null) {
    return <p></p>
  }
  else {

    if (orderId === selectedOrder.id) {
      if (update === false) {
        return (<OrderDetails selectedOrder={selectedOrder} hideDetails={hideDetails} />);
      } else {
        return (<OrderForm selectedOrder={selectedOrder} onUpdateOrder={onUpdateOrder} />)
      }
    }
    else {
      return null
    }
  }
}
 
export default ShowDetails;