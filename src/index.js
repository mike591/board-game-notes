import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "components/App";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
