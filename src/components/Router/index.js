import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavRoute from "../NavRoute";
import { Main, About, NoMatchPage } from "../../pages";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <NavRoute exact path="/" component={Main} />
        <NavRoute exact path="/about" component={About} />
        <Route component={NoMatchPage} />
      </Switch>
    </BrowserRouter>
  );
}
