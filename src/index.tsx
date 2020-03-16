import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/style.scss";
import configureStore from "./redux/configureStore";
import { ThroughProvider } from "react-through";

export const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThroughProvider>
        <App />
      </ThroughProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
