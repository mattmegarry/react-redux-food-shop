import { ADD_FOOD_TO_SHOPPING } from "../actions/actionTypes";

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
    default:
      return { ...state };
  }
};

export default foodsReducer;
