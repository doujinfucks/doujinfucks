import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar";

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    )}
  />
);
export default NavRoute;
