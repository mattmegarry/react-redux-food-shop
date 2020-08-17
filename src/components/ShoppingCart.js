import React from "react";
import { connect } from "react-redux";
import Dinero from "dinero.js";

const ShoppingCart = props => {
  return (
    <div className="shopping-cart section">
      <h2>Your Items</h2>
      <div>
        {props.shoppingCart.map(item => (
          <div className="cart-row" key={item.name}>
            <p className="cart-name">{item.name}</p>
            <p className="cart-quantity">{item.quantity}</p>
            <p className="cart-row-price">
              {Dinero({ amount: item.price, currency: "GBP" })
                .multiply(item.quantity)
                .toFormat("$0,0.00")}
            </p>
          </div>
        ))}
      </div>
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
