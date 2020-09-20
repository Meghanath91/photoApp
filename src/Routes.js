// Main State stored here and Routes
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./app/pages/Login/Login";
import Register from "./app/pages/Register/Register";
export default function Routes() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact>
          {/* <Home /> */}
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
