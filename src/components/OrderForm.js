import React, { useState } from "react";
import "../static/order-details.css";

const OrderForm = ({ selectedOrder, onUpdateOrder, selectedMenu }) => {
  const [stateOrder, setStateOrder] = useState({ ...selectedOrder });

  const selectDrinks = selectedMenu.drinks.map((drink, index) => {
    return (
      <option key={index} value={index}>
        {drink.name}- £{(drink.price / 100).toFixed(2)}
      </option>
    );
  });

  const selectFoods = selectedMenu.foods.map((food, index) => {
    return (
      <option key={index} value={index}>
        {food.name}- £{(food.price / 100).toFixed(2)}
      </option>
    );
  });

  const selectOptions = stateOrder.drinks.map((drink, index) => {
    const handleDrinkDelete = (event) => {
      let copiedOrder = { ...stateOrder };
      console.log(event);
      copiedOrder.drinks.splice(event.target.value, 1);
      setStateOrder(copiedOrder);
    };
    return (
      <li key={index} value={index}>
        {drink.name}- £{(drink.price / 100).toFixed(2)}
        <p>
          <button
            type="button"
            value={index}
            className="delete-box"
            onClick={handleDrinkDelete}
          >
            Remove {drink.name}
          </button>
        </p>
      </li>
    );
  });

  const selectFoodOptions = stateOrder.foods.map((food, index) => {
    const handleFoodDelete = (event) => {
      let copiedOrder = { ...stateOrder };
      copiedOrder.foods.splice(event.target.value, 1);
      setStateOrder(copiedOrder);
    };
    return (
      <li key={index} value={index}>
        {food.name}- £{(food.price / 100).toFixed(2)}
        <p>
          <button
            type="button"
            value={index}
            className="delete-box"
            onClick={handleFoodDelete}
          >
            Remove {food.name}
          </button>
        </p>
      </li>
    );
  });

  const handleDrinkAdd = (event) => {
    let copiedOrder = { ...stateOrder };
    let drink = selectedMenu.drinks[event.target.value];
    copiedOrder.drinks.push(drink);
    setStateOrder(copiedOrder);
  };

  const handleFoodAdd = (event) => {
    let copiedOrder = { ...stateOrder };
    let food = selectedMenu.foods[event.target.value];
    copiedOrder.foods.push(food);
    setStateOrder(copiedOrder);
  };

  const handleCustomerChange = (event) => {
    let propertyName = event.target.name;
    let copiedOrder = { ...stateOrder };
    copiedOrder.customer[propertyName] = event.target.value;
    setStateOrder(copiedOrder);
  };

  const handleChange = (event) => {
    let propertyName = event.target.name;
    let copiedOrder = { ...stateOrder };
    copiedOrder[propertyName] = event.target.value;
    setStateOrder(copiedOrder);
  };

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
          type="time"
          name="collectionTime"
          defaultValue={stateOrder.collectionTime}
          onChange={handleChange}
        />
      </p>
      <p>
        <label> Collection Date: </label>
        <input
          type="date"
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
        <ul>{selectOptions}</ul>
      </p>
      <p>
        <label> Food: </label>
        <ul>{selectFoodOptions}</ul>
      </p>

      <h4>Add a drink:</h4>
      <p>
        <select
          name="drink"
          defaultValue="select-drink"
          onChange={handleDrinkAdd}
        >
          <option disabled value="select-drink">
            Select a drink to add
          </option>
          {selectDrinks}
        </select>
      </p>

      <h4>Add food:</h4>
      <p>
        <select name="food" defaultValue="select-food" onChange={handleFoodAdd}>
          <option disabled value="select-food">
            Select food to add
          </option>
          {selectFoods}
        </select>
      </p>

      <input type="submit" value="Update" />
    </form>
  );
};

export default OrderForm;
