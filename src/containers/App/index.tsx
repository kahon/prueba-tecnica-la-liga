import LoginPage from "containers/LoginPage";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" component={LoginPage} />
    </Router>
  );
};

export default App;
