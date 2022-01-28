import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Footer from "components/Footer";
import { Header } from "components/Header";
import LoginPage from "containers/LoginPage";
import NotFoundPage from "containers/NotFoundPage";
import UserListPage from "containers/UserListPage";
import ConditionalRoute from "./ConditionalRoute";
import useAuth from "hooks/useAuth";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.primary};
`;
export const AppRouter = () => {
  const auth = useAuth();
  return (
    <Router>
      <Header />
      <StyledDiv>
        <Switch>
          <Route exact path="/">
            <Redirect to={"/login"} />
          </Route>
          <ConditionalRoute
            exact
            path="/login"
            component={LoginPage}
            conditionToRedirect={auth.isLogged()}
            redirectTo={"/users"}
          />
          <ConditionalRoute
            exact
            path="/users"
            component={UserListPage}
            conditionToRedirect={!auth.isLogged()}
            redirectTo={"/login"}
          />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </StyledDiv>
    </Router>
  );
};
