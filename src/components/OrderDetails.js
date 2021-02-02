import React from 'react';
import '../static/order-details.css'

const OrderDetails = ({selectedOrder, hideDetails}) => {

    if(selectedOrder == null){
        return <p></p>
    }

    const handleClose = (evt) => {
       hideDetails()}

    const drinkDetails = selectedOrder.drinks.map((drink, index) => {
        return (
            <div>
                <p>{drink.name}- £{drink.price}</p>
                <p></p>
            </div>
        )
    })

    const foodDetails = selectedOrder.foods.map((food, index) => {
        return (
            <p>{food.name}- £{food.price}</p>
        )
    })

    let total = 0;
    selectedOrder.foods.forEach((food) => total += food.price)
    selectedOrder.drinks.forEach((drink) => total += drink.price)




    return(
       <div className="details-box">
           <h3>{selectedOrder.collectionTime}</h3>
           <h3>{selectedOrder === undefined ? "" : selectedOrder.customer.name}</h3>
           <h4>Drinks:</h4>
           {drinkDetails}
           <h4>Food:</h4>
           {foodDetails}
           <h4>Total: £{total}</h4>
           <p><button onClick={handleClose}>Close</button></p>
       </div>
    )
}

export default OrderDetails;