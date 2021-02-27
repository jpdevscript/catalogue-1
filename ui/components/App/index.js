import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HairlineDivider from "@tds/core-hairline-divider";
import Box from "@tds/core-box";

import Home from "../Home";
import Iphone from "../Iphone";
import Watch from "../Watch";

const App = () => {
  return (
    <Router>
      <Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/iphones">Iphones</Link>
          </li>
          <li>
            <Link to="/watches">Watches</Link>
          </li>
        </ul>
        <Box vertical={3}>
          <HairlineDivider />
        </Box>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/iphones">
            <Iphone />
          </Route>
          <Route path="/watches">
            <Watch />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

App.displayName = "App";

export default App;
