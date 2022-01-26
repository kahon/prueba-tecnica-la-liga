import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "components/Button";
import LoginPage from "containers/LoginPage";
import NotFoundPage from "containers/NotFoundPage";
import { ACTIONS } from "store/actions";
import { Header } from "components/Header";
import useAuth from "hooks/useAuth";
import UserListPage from "containers/UserListPage";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = ({ store }) => {
  const auth = useAuth();

  return (
    <Router>
      {/* <Button
        onClick={() => {
          store.dispatch({
            type: ACTIONS.API.LOGIN_REQUEST,
            payload: {
              user: {
                username: "eve.holt@reqres.in",
                password: "cityslicka",
              },
            },
          });
        }}
      >
        Test Redux
      </Button> */}
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
