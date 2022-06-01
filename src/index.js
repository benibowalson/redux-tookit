import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ourStore from "./redux-stuff/my-store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={ourStore}>
    <App />
  </Provider>
);
