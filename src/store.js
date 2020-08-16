import { createStore } from "redux";
import foodsReducer from "./reducers/foodsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(foodsReducer, composeWithDevTools());

export default store;
