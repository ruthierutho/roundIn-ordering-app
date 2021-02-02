import React from "react";
import "../static/order-details.css";

const OrderDetails = ({ selectedOrder, hideDetails }) => {
  if (selectedOrder == null) {
    return <p></p>;
  }

  const handleClose = (evt) => {
    hideDetails();
  };

  const drinkDetails = selectedOrder.drinks.map((drink, index) => {
    return (
      <li key={drink.id}>
        <p>
          {drink.name}- £{drink.price}
        </p>
      </li>
    );
  });

  const foodDetails = selectedOrder.foods.map((food, index) => {
    return (
      <li key={food.id}>
        <p>
          {food.name}- £{food.price}
        </p>
      </li>
    );
  });

  let total = 0;
  selectedOrder.foods.forEach((food) => (total += food.price));
  selectedOrder.drinks.forEach((drink) => (total += drink.price));

  return (
    <div className="details-box">
      <h3>{selectedOrder.collectionTime}</h3>
      <h3>{selectedOrder === undefined ? "" : selectedOrder.customer.name}</h3>
      <h4>Drinks:</h4>
      <ul>{drinkDetails}</ul>
      <h4>Food:</h4>
      <ul>{foodDetails}</ul>
      <h4>Total: £{total}</h4>
      <p>
        {selectedOrder.id !== 1 ? (
          <button onClick={handleClose}>Close</button>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default OrderDetails;
