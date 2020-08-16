import React from "react";
import { connect } from "react-redux";
import Dinero from "dinero.js";

const ShoppingCart = props => {
  return (
    <div className="shopping-cart">
      <h2>Your Items</h2>
      {props.shoppingCart.map(item => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>
            {Dinero({ amount: item.price, currency: "GBP" })
              .multiply(item.quantity)
              .toFormat("$0,0.00")}
          </p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  };
};

export default connect(
  mapStateToProps,
  null
)(ShoppingCart);
