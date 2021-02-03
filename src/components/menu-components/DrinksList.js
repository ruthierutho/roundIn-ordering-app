import React from "react";
import Drink from "./Drink";

const DrinksList = ({ drinks }) => {
  return (
    <>
      <div className="menu-list-box">
        <h4>Drinks</h4>
        <ul>
          {drinks.map((drink, index) => {
            return (
              <Drink key={index} name={drink.name} price={drink.price}></Drink>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DrinksList;
