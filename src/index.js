/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";
import { MaterialUIControllerProvider } from "context";
import { AuthProvider } from "./context/AuthProvider";
// Material Dashboard 2 React Context Provider

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <MaterialUIControllerProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </MaterialUIControllerProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
