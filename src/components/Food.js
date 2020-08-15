import React from "react";

const Food = props => {
  const { name, price } = props;
  return (
    <div className="food">
      <p>{name}</p>
      <p>£{price}</p>
      <button>Add One</button>
    </div>
  );
};

export default Food;
