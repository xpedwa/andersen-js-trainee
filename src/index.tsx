import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/configureStore";
import App from "./Components/App";
import "./index.css";
import StateWrapper from "./Containers/StateWrapper";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StateWrapper>
        <App />
      </StateWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
