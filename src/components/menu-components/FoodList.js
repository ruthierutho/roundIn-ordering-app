import React from "react";
import Food from "./Food";

const FoodList = ({ foods }) => {
  return (
    <>
      <div className="menu-list-box">
        <h4>Foods</h4>
        <ul>
          {foods.map((food, index) => {
            return (
              <Food key={index} name={food.name} price={food.price}></Food>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FoodList;
