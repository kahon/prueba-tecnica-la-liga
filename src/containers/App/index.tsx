import LoginPage from "containers/LoginPage";
import NotFoundPage from "containers/NotFoundPage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
