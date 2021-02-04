import React, { useState } from 'react';
import "../static/order-details.css";


const OrderForm = ({ selectedOrder, onUpdateOrder, selectedMenu }) => {

    const [stateOrder, setStateOrder] = useState({ ...selectedOrder })


    const selectDrinks = selectedMenu.drinks.map((drink, index) => {

        return (
            <option key={index} value={index}>
                {drink.name}- £{drink.price}
            </option>

        )
    })

    const selectFoods = selectedMenu.foods.map((food, index) => {

        return (
            <option key={index} value={index}>
                {food.name}- £{food.price}
            </option>

        )
    })

    const selectOptions = stateOrder.drinks.map((drink, index) => {
        const handleDrinkDelete = (event) => {
            let copiedOrder = { ...stateOrder }
            console.log(event)
            copiedOrder.drinks.splice(event.target.value, 1)
            setStateOrder(copiedOrder)
        }
        return (
            <li key={index} value={index}>
                {drink.name}- £{drink.price}
                <button type="button" value={index} className="delete-box" onClick={handleDrinkDelete}>Delete Drink</button>
            </li>
        );
    });

    const selectFoodOptions = stateOrder.foods.map((food, index) => {
        const handleFoodDelete = (event) => {
            let copiedOrder = { ...stateOrder }
            copiedOrder.foods.splice(event.target.value, 1)
            setStateOrder(copiedOrder)
        }
        return (
            <li key={index} value={index}>
                {food.name}- £{food.price}
                <button type="button" value={index} className="delete-box" onClick={handleFoodDelete}>Delete Food</button>
            </li>
        );
    });

    const handleDrinkAdd = (event) => {
        let copiedOrder = { ...stateOrder }
        let drink = selectedMenu.drinks[event.target.value]
        copiedOrder.drinks.push(drink)
        setStateOrder(copiedOrder)
    }

    const handleFoodAdd = (event) => {
        let copiedOrder = { ...stateOrder }
        let food = selectedMenu.foods[event.target.value]
        copiedOrder.foods.push(food)
        setStateOrder(copiedOrder)
    }

    const handleCustomerChange = (event) => {
        let propertyName = event.target.name;
        let copiedOrder = { ...stateOrder }
        copiedOrder.customer[propertyName] = event.target.value;
        setStateOrder(copiedOrder)
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedOrder = { ...stateOrder }
        copiedOrder[propertyName] = event.target.value;
        setStateOrder(copiedOrder)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onUpdateOrder(stateOrder);
    };


    return (
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
                    onChange={handleChange}
                />
            </p>
            <p>
                <label> Collection Date: </label>
                <input
                    type="text"
                    name="collectionDate"
                    defaultValue={stateOrder.collectionDate}
                    onChange={handleChange}
                />
            </p>
            <p>
                <label> Collected: </label>
                <select
                    name="collected"
                    defaultValue={stateOrder.collected}
                    onChange={handleChange}
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

            <p>
                <select
                    name="drink"
                    defaultValue={selectDrinks}
                    onChange={handleDrinkAdd}
                >
                    {selectDrinks}
                </select>

            </p>

            <p>
                <select
                    name="food"
                    defaultValue={selectFoods}
                    onChange={handleFoodAdd}
                >
                    {selectFoods}
                </select>

            </p>


            <input
                type="submit"
                value="Update"
            />


        </form>
    )
}


export default OrderForm;