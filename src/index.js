import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NoMatchPage, Main, About } from "./pages/index";
import NavRoute from "./components/NavRoute";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/MUITheme";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <NavRoute exact path="/" component={Main} />
          <NavRoute exact path="/about" component={About} />
          <Route component={NoMatchPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
