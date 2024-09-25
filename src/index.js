import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route} from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import RegisterPage from "views/examples/RegisterPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/register-page" element={<RegisterPage />} />
  </Routes>
);
