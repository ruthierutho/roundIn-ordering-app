import React, { useState } from 'react';
import "../static/order-details.css";


const OrderForm = ({selectedOrder, onUpdateOrder}) => {

    const [stateOrder, setStateOrder] = useState ({...selectedOrder})

    const selectOptions = stateOrder.drinks.map((drink, index) => {
        return (
          <option key={index} value={index}>
            {drink.name}- £{drink.price}
          </option>
        );
      });


    const handleCustomerChange = (event) => {
        let propertyName = event.target.name;
        let copiedOrder = {...stateOrder}
        copiedOrder.customer[propertyName] = event.target.value;
        setStateOrder(copiedOrder)
    }

    const handleTimeChange = (event) => {
        let propertyName = event.target.name;
        let copiedOrder = {...stateOrder}
        copiedOrder[propertyName] = event.target.value;
        setStateOrder(copiedOrder)
    }

    const handleDrinkChange = (event) => {
        const index = parseInt(event.target.value)
        const selectedDrink = stateOrder.drinks[index]
        let copiedOrder = {...stateOrder};
        copiedOrder['drink'] = selectedDrink
        setStateOrder(copiedOrder)
    }

    const handleFormSubmit = (evt) =>{
        evt.preventDefault();
        onUpdateOrder(stateOrder);
    }

    const handleDelete = () => {
        ondeviceorientationabsolute(stateOrder.drinks.id)
    }
 
    return(
        <form className="details-box" onSubmit={handleFormSubmit}>
            <p>
            <label> Customer Name: </label>
            <input
            type="text"
            name="name"
            defaultValue={stateOrder.customer.name}
            onChange={handleCustomerChange}
            />
            </p>
            <p>
            <label> Collection Time: </label>
            <input
            type="text"
            name="collectionTime"
            defaultValue={stateOrder.collectionTime}
            onChange={handleTimeChange}
            />
            </p>
            <p>
            <label> Collection Date: </label>
            <input
            type="text"
            name="collectionDate"
            defaultValue={stateOrder.collectionDate}
            onChange={handleTimeChange}
            />
            </p>
            <p>
            <label> Collected: </label>
            <select
            name="collected"
            defaultValue={stateOrder.collected}
            onChange={handleTimeChange}
            >
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>
            </p>
            <p>
            <label> Drinks: </label>
            <ul>
                    {selectOptions}
                    <button onClick={handleDelete}>Delete Drink</button>     
            </ul>
            </p>
            <p>
            <select
                name="drink"
                defaultValue={selectOptions}
                onChange={handleDrinkChange}
            >
            {selectOptions}
            </select>
            </p>

            <input
            type="submit"
            value="Update"
            />

            
        </form>
    )
}

//   <select
// name="drink"
// defaultValue={selectOptions}
// onChange={handleDrinkChange}
// >
//  {selectOptions}
// </select>
export default OrderForm;