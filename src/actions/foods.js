import { ADD_FOOD_TO_SHOPPING, REMOVE_FOOD_FROM_SHOPPING } from "./actionTypes";

export const addFoodToShopping = payload => {
  const { name, price } = payload;
  return {
    type: ADD_FOOD_TO_SHOPPING,
    name,
    price
  };
};

export const removeFoodFromShopping = payload => {
  const { name } = payload;
  return {
    type: REMOVE_FOOD_FROM_SHOPPING,
    name
  };
};
