import Button from "components/Button";
import LoginPage from "containers/LoginPage";
import NotFoundPage from "containers/NotFoundPage";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "store";
import { ACTIONS } from "store/actions";

/**
 * carga el token salvado en el localStorage en el store
 */
store.dispatch({ type: ACTIONS.API.RECOVER_LOCAL_TOKEN });

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Button
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
