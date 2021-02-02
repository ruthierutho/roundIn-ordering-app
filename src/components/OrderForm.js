import React, { useState } from 'react';


const OrderForm = ({selectedOrder, onUpdateOrder}) => {

    const [stateOrder, setStateOrder] = useState ({...selectedOrder})



    const handleFormSubmit = (evt) =>{
        evt.preventDefault();
        onUpdateOrder(stateOrder);
    }

    const handleCustomerChange = (event) => {
        let propertyName = event.target.name;
        let copiedOrder = {...stateOrder}
        copiedOrder.customer[propertyName] = event.target.value;
        setStateOrder(copiedOrder)
    }
 
    return(
        <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            name="name"
            defaultValue={stateOrder.customer.name}
            onChange={handleCustomerChange}
            />
            <input
            type="submit"
            value="Update"
            />

            
        </form>
    )
}

export default OrderForm;