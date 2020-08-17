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

          let updatedShoppingCart = [];

          if (matchedIndex !== -1) {
            updatedShoppingCart = [...shoppingCart];
            updatedShoppingCart[matchedIndex].quantity =
              updatedShoppingCart[matchedIndex].quantity + 1;
          } else {
            updatedShoppingCart = shoppingCart.concat([
              {
                name,
                price,
                quantity: 1
              }
            ]);
          }
          return updatedShoppingCart;
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
