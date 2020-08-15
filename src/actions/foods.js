import { ADD_FOOD_TO_SHOPPING } from "./actionTypes";

export const addFoodToShopping = payload => {
  const { name, price } = payload;
  return {
    type: ADD_FOOD_TO_SHOPPING,
    name,
    price
  };
};
