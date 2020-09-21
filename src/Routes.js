// Main State stored here and Routes
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./app/components/Navbar/Navbar";
import Home from "./app/pages/Home/Home";
import Login from "./app/pages/Login/Login";
import Profile from "./app/pages/Profile/Profile";
import Register from "./app/pages/Register/Register";
export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
