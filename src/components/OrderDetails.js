import React from 'react';

const OrderDetails = ({selectedOrder}) => {
    return(
       <div>
           {selectedOrder == undefined ? "" : selectedOrder.customer.name}
       </div>
    )
}

export default OrderDetails;