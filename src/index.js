/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "animate.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { AppProvider } from "./ContextApi/ProductContext";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Auth0Provider
      domain="dev-jipymmfck0e3dnlr.us.auth0.com"
      clientId="XcDCbxMxo6jPe6y3jVU0vdTPs84xlwPe"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </Auth0Provider>
  </>
);

reportWebVitals();
