import React, { useState } from 'react';
import "../static/order-details.css";


const OrderForm = ({selectedOrder, onUpdateOrder}) => {

    const [stateOrder, setStateOrder] = useState ({...selectedOrder})

    const selectOptions = stateOrder.drinks.map((drink, index) => {
            const handleDrinkDelete = (event) => {
                let copiedOrder = {...stateOrder}
                copiedOrder.drinks.splice(event.target.value, 1)
                setStateOrder(copiedOrder)
    }
        return (
          <li key={index} value={index}>
            {drink.name}- £{drink.price}
            <button onClick={handleDrinkDelete}>Delete Drink</button> 
          </li>
        );
      });

    const selectFoodOptions = stateOrder.foods.map((food, index) => {
        const handleFoodDelete = (event) => {
            let copiedOrder = {...stateOrder}
            copiedOrder.foods.splice(event.target.value, 1)
            setStateOrder(copiedOrder)
}
    return (
      <li key={index} value={index}>
        {food.name}- £{food.price}
        <button onClick={handleFoodDelete}>Delete Food</button> 
      </li>
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

    // const handleDrinkChange = (event) => {
    //     const index = parseInt(event.target.value)
    //     const selectedDrink = stateOrder.drinks[index]
    //     let copiedOrder = {...stateOrder};
    //     copiedOrder['drink'] = selectedDrink
    //     setStateOrder(copiedOrder)
    // }

    const handleFormSubmit = (evt) =>{
        evt.preventDefault();
        onUpdateOrder(stateOrder);
    }

    const handleDelete = () => {
        return null
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
            </ul>
            </p>
            <p>
            <label> Food: </label>
            <ul>
                    {selectFoodOptions}    
            </ul>
            </p>


            <input
            type="submit"
            value="Update"
            />

            
        </form>
    )
}

// <p>
// <select
//     name="drink"
//     defaultValue={selectOptions}
//     onChange={handleDrinkChange}
// >
// {selectOptions}
// </select>
// </p>
export default OrderForm;