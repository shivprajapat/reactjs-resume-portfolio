import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{size:"30"}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </IconContext.Provider>
  </React.StrictMode>
);
reportWebVitals();
