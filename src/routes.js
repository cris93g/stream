import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyPage from "./Pages/MyPage/MyPage";
import Player from "./Components/Player/Player";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={MyPage} path="/mine" />
    <Route component={Player} path="/player/:id" />
  </Switch>
);
