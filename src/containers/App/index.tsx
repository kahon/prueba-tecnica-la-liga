import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "routes/AppRouter";
import store from "store";
import { ACTIONS } from "store/actions";

/**
 * carga el token salvado en el localStorage en el store
 */
store.dispatch({ type: ACTIONS.API.RECOVER_LOCAL_TOKEN });

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
