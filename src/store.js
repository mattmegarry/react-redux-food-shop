import { createStore } from "redux";
import foodsReducer from "./reducers/foodsReducer";

const store = createStore(foodsReducer);

export default store;
