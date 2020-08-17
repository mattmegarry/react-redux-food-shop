import {
  ADD_FOOD_TO_SHOPPING,
  REMOVE_FOOD_FROM_SHOPPING
} from "../actions/actionTypes";

const initialState = {
  shoppingCart: []
};

const foodsReducer = (state = initialState, action) => {
  const { shoppingCart } = state;
  const { name, price } = action;
  switch (action.type) {
    case ADD_FOOD_TO_SHOPPING:
      return {
        ...state,
        shoppingCart: (() => {
          const matchedIndex = shoppingCart.findIndex(
            food => food.name === name
          );

          if (matchedIndex !== -1) {
            return shoppingCart.map((item, index) =>
              index === matchedIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return shoppingCart.concat({ name, price, quantity: 1 });
        })()
      };
    case REMOVE_FOOD_FROM_SHOPPING:
      return {
        ...state,
        shoppingCart: (() => {
          return shoppingCart.flatMap(item => {
            return item.name === name
              ? item.quantity <= 1
                ? []
                : { ...item, quantity: item.quantity - 1 }
              : item;
          });
        })()
      };
    default:
      return { ...state };
  }
};

export default foodsReducer;
