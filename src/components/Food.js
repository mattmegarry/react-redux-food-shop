import React from "react";
import { connect } from "react-redux";
import { addFoodToShopping } from "../actions/foods";

const Food = props => {
  const { name, price } = props;
  return (
    <div className="food">
      <p>{name}</p>
      <p>£{price}</p>
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
