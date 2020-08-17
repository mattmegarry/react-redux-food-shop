import React from "react";
import FoodList from "./components/FoodList";
import ShoppingCart from "./components/ShoppingCart";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="header section">
          <h1>React Redux Food Shop!</h1>
        </div>
        <FoodList />
        <ShoppingCart />
      </div>
    </Provider>
  );
}

export default App;
