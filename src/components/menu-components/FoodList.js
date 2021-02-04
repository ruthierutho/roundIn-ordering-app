import React, { useState } from "react";
import Food from "./Food";

const FoodList = ({ foods }) => {

  const selectFood = foods.map((food, index) => {

    return (
        <option key={index} value={index}>
            {food.name}- £{(food.price / 100).toFixed(2)}
        </option>

    )
})

const handleFoodAdd = (event) => {
  let food = foods[event.target.value]
  foods.push(food)

}


  const foodOptions = foods.map((food, index) => {

    const handleFoodDelete = (event) => {
      foods.splice(event.target.value, 1)
 
  }
    return (
      <ul>
      <Food key={index} name={food.name} price={food.price}></Food>
      <button type="button" value={index} className="delete-box" onClick={handleFoodDelete}>Remove {food.name}</button>
      </ul>
    )
  })


  return (
    <>
      <div className="menu-list-box">
        <h3>Food:</h3>
              {foodOptions}
      </div>
      <h4>Add a Food Item:</h4>
      <p>
        <select
          name="food"
          defaultValue='select-food'
          onChange={handleFoodAdd}
        >
          <option disabled value='select-food'>Select food to add</option>
          {selectFood}
        </select>

      </p>
    </>
  );

}

export default FoodList;
