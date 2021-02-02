import React from "react";
import DrinksList from "./DrinksList";
import FoodList from "./FoodList";

const MenuDetails = ({ selectedMenu, hideDetails }) => {
  if (selectedMenu == null) {
    return <p>Select an menu</p>;
  }

  const handleClose = (evt) => {
    hideDetails();
  };

  return (
    <div className="details-box">
      <h3>{selectedMenu.name}</h3>
      <h4>{selectedMenu.venues[0].name}</h4>
      <DrinksList drinks={selectedMenu.drinks} />
      <FoodList foods={selectedMenu.foods} />

      <p>
        <button onClick={handleClose}>Close</button>
      </p>
    </div>
  );
};

export default MenuDetails;
