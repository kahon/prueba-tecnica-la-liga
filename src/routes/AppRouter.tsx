import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "containers/LoginPage";
import NotFoundPage from "containers/NotFoundPage";
import { Header } from "components/Header";
import UserListPage from "containers/UserListPage";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/users" component={UserListPage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
