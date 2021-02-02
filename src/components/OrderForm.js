import React from 'react';

const OrderForm = ({selectedOrder}) => {

    const handleFormSubmit = (evt) =>{
        evt.preventDefault();
        return null
    }

    const handleCustomerChange = () => {
        return null
    }
 
    return(
        <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder={selectedOrder.customer.name}
            value={selectedOrder.customer.name}
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