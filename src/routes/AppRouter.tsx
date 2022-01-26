import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "containers/LoginPage";
import NotFoundPage from "containers/NotFoundPage";
import { Header } from "components/Header";
import UserListPage from "containers/UserListPage";
import PrivateRoute from "./PrivateRoute";
import useAuth from "hooks/useAuth";
import ConditionalRoute from "./ConditionalRoute";

export const AppRouter = () => {
  const auth = useAuth();

  return (
    <Router>
      <Header />
      <Switch>
        <ConditionalRoute
          exact
          path="/"
          component={LoginPage}
          conditionToRedirect={auth.isAuth()}
          redirectTo={"/users"}
        />
        <ConditionalRoute
          exact
          path="/login"
          component={LoginPage}
          conditionToRedirect={!auth.isAuth()}
          redirectTo={"/users"}
        />
        <PrivateRoute exact path="/users" component={UserListPage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
