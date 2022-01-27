import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { AppRouter } from "routes/AppRouter";
import store from "store";
import { ACTIONS } from "store/actions";
import { ThemeProvider } from "styled-components";

const App = () => {
  useEffect(() => {
    /**
     * carga el token salvado en el localStorage en el store
     */
    store.dispatch({ type: ACTIONS.API.LOGIN.RECOVER_LOCAL_TOKEN });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider
        theme={{ primary: "#F9E79F", secondary: "#F7DC6F", active: "yellow" }}
      >
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
