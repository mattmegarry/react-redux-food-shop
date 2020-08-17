import React from "react";
import { foods } from "../data/foods.js";
import Food from "./Food";

const FoodList = () => {
  return (
    <div className="food-list section">
      {foods.map(food => (
        <Food key={food.name} name={food.name} price={food.price} />
      ))}
    </div>
  );
};

export default FoodList;
