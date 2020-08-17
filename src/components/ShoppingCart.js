import React from "react";
import { connect } from "react-redux";
import { addFoodToShopping } from "../actions/foods";
import Dinero from "dinero.js";

const ShoppingCart = props => {
  return (
    <div className="shopping-cart section">
      <h2>Your Items</h2>
      <div>
        {props.shoppingCart.map(item => {
          const { name, price, quantity } = item;
          return (
            <div className="cart-row" key={name}>
              <p className="cart-name">{name}</p>
              <div className="cart-quantity-buttons">
                <button>-</button>
                <p className="cart-quantity">{quantity}</p>
                <button
                  onClick={() => props.addFoodToShopping({ name, price })}
                >
                  +
                </button>
              </div>
              <p className="cart-row-price">
                {Dinero({ amount: price, currency: "GBP" })
                  .multiply(quantity)
                  .toFormat("$0,0.00")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFoodToShopping: payload => dispatch(addFoodToShopping(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
