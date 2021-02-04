import React from "react";
import Drink from "./Drink";

const DrinksList = ({ drinks }) => {

  const selectDrinks = drinks.map((drink, index) => {

    return (
        <option key={index} value={index}>
            {drink.name}- £{(drink.price / 100).toFixed(2)}
        </option>

    )
})


  const handleDrinkAdd = (event) => {
    let drink = drinks[event.target.value]
    drinks.push(drink)

  }

  const drinkOptions = drinks.map((drink, index) => {

    const handleDrinkDelete = (event) => {
      drinks.splice(event.target.value, 1)
    }

    return (
      <li>
        <Drink key={index} name={drink.name} price={drink.price}></Drink>
        <button type="button" value={index} className="delete-box" onClick={handleDrinkDelete}>Remove {drink.name}</button>
      </li>
    )
  })

  return (
    <>
      <div className="menu-list-box">
        <h3>Drinks:</h3>
        {drinkOptions}
      </div>
      <h4>Add a Drink:</h4>
      <p>
        <select
          name="drink"
          defaultValue='select-drink'
          onChange={handleDrinkAdd}
        >
          <option disabled value='select-drink'>Select a drink to add</option>
          {selectDrinks}
        </select>

      </p>
    </>
  );
};

export default DrinksList;
