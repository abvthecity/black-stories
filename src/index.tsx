import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import { Home } from "./home/Home";

const BlackVoicesRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<BlackVoicesRouter />, root);
