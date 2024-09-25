import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import RegisterPage from "views/examples/RegisterPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/ForeignLanguageHub">
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);
