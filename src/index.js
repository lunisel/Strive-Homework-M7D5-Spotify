import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
