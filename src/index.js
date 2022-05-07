import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "components/App";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
