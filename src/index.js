import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Auth0ProviderWithHistory from './Authenticate';

ReactDOM.render(
  <Router>
      <Auth0ProviderWithHistory>
    <App />
      </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);