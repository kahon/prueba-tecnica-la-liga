import Button from "components/Button";
import LoginPage from "containers/LoginPage";
import NotFoundPage from "containers/NotFoundPage";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "store";
import { ACTIONS } from "store/actions";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Button
          onClick={() => {
            store.dispatch({ type: ACTIONS.API.LOGIN_REQUEST });
          }}
        >
          Test Redux
        </Button>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
