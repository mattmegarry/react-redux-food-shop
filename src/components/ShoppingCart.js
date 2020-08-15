import React from "react";
import { connect } from "react-redux";

const ShoppingCart = props => {
  return (
    <div className="shopping-cart">
      <h2>Your Items</h2>
      {props.shoppingCart.map(item => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{Number(item.price) * Number(item.quantity)}</p>
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
