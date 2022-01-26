import React from "react";
import { Redirect, Route } from "react-router-dom";

const ConditionalRoute = ({
  component: Component,
  conditionToRedirect,
  redirectTo,
  ...rest
}) => {
  return (
    <Route {...rest}>
      {!conditionToRedirect ? <Component /> : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default ConditionalRoute;
