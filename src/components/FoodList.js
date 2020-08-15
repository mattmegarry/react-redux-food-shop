import React from "react";
import { foods } from "../data/foods.js";
import Food from "./Food";

const FoodList = () => {
  return (
    <div className="food-list">
      {foods.map(food => (
        <Food name={food.name} price={food.price} />
      ))}
    </div>
  );
};

export default FoodList;
