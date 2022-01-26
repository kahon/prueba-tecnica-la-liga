import useAuth from "hooks/useAuth";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.isAuth() ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
