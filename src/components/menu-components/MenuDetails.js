import React from "react";
import DrinksList from "./DrinksList";
import FoodList from "./FoodList";

const MenuDetails = ({ selectedMenu, hideDetails }) => {
  if (selectedMenu == null) {
    return null;
  }

  const handleClose = (evt) => {
    hideDetails();
  };

  return (
    <div className="details-box">
      <h3>{selectedMenu.name}</h3>
      <DrinksList drinks={selectedMenu.drinks} />
      <FoodList foods={selectedMenu.foods} />
      <p>
        {selectedMenu.id !== 1 ? (
          <button onClick={handleClose}>Close</button>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default MenuDetails;
