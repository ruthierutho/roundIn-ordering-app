import React from "react";
import "../static/order-details.css";

const OrderDetails = ({ selectedOrder, hideDetails }) => {
  if (selectedOrder == null) {
    return <p>Select an order</p>;
  }

  const handleClose = (evt) => {
    hideDetails();
  };

  const drinkDetails = selectedOrder.drinks.map((drink, index) => {
    return (
      <div>
        <p>
          {drink.name}- £{drink.price}
        </p>
        <p></p>
      </div>
    );
  });

  const foodDetails = selectedOrder.foods.map((food, index) => {
    return (
      <p>
        {food.name}- £{food.price}
      </p>
    );
  });

  // let drinks = selectedOrder.drinks.map((drink, index) => {
  //     return (
  //         {drink.price}
  //     )
  // })

  // const getBill = () => {
  //     const totalBill = 0;
  //     for (drink.price in drinks){
  //     drink.price += totalBill
  //    }
  //    for(food in foods){
  //        food.price += totalBill
  //    }
  //    return totalBill
  // }

  return (
    <div className="details-box">
      <h3>{selectedOrder.collectionTime}</h3>
      <h3>{selectedOrder === undefined ? "" : selectedOrder.customer.name}</h3>
      <h4>Drinks:</h4>
      {drinkDetails}
      <h4>Food:</h4>
      {foodDetails}
      <h4>Total:</h4>
      <button>Mark as Collected</button>
      <p>
        <button onClick={handleClose}>Close</button>
      </p>
    </div>
  );
};

export default OrderDetails;
