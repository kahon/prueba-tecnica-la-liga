import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { AppRouter } from "routes/AppRouter";
import store from "store";
import { ACTIONS } from "store/actions";

const App = () => {
  useEffect(() => {
    /**
     * carga el token salvado en el localStorage en el store
     */
    store.dispatch({ type: ACTIONS.API.LOGIN.RECOVER_LOCAL_TOKEN });
  }, []);

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
