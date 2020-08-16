import React from "react";
import { connect } from "react-redux";
import { addFoodToShopping } from "../actions/foods";
import Dinero from "dinero.js";

const Food = props => {
  const { name, price } = props;
  return (
    <div className="food">
      <p>{name}</p>
      <p>{Dinero({ amount: price, currency: "GBP" }).toFormat("$0,0.00")}</p>
      <button onClick={() => props.addFoodToShopping({ name, price })}>
        Add One
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addFoodToShopping: payload => dispatch(addFoodToShopping(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Food);
