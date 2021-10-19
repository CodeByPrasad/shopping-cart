import React from "react";
import "./shopping-card.scss";
function ShoppingCard(props) {
  return (
    <div className="card-container">
      <div className="logo-container">
        <img width="200px" src={props.data.thumbnail_url} alt="icon1"></img>
      </div>
      <div className="Titel-container">
          <h3>{props.data.title}</h3>
          </div>
      
      <div className="Quantity-container">
        <p>{props.data.quantity} Left in stock</p>
      </div>
      <p>{props.data.description}</p>

      <div className="price-container">
        <p>${props.data.price}</p>
      
        <button className="button-container">Add To Cart</button>
        </div>
    </div>

  );
}

export default ShoppingCard;
