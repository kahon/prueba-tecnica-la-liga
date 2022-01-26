import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "components/Button";
import LoginPage from "containers/LoginPage";
import NotFoundPage from "containers/NotFoundPage";
import { ACTIONS } from "store/actions";
import { Header } from "components/Header";

export const AppRouter = ({ store }) => {
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
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};
