import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import ErrorMessage from "components/ErrorMessage";
import Loading from "components/Loading";
import useError from "hooks/useError";
import useLoading from "hooks/useLoading";
import { AppRouter } from "routes/AppRouter";
import store from "store";
import { ACTIONS } from "store/actions";

const App = () => {
  const { isLoading } = useLoading();
  const { error } = useError();

  useEffect(() => {
    /**
     * carga el token salvado en el localStorage en el store
     */
    store.dispatch({ type: ACTIONS.API.LOGIN.RECOVER_LOCAL_TOKEN });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider
        theme={{
          primary: "#F9E79F",
          secondary: "#F7DC6F",
          active: "yellow",
          borderColor: "#F8C471",
        }}
      >
        <AppRouter />
        <ErrorMessage error={error} />
        <Loading show={isLoading} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
