import { useState } from "react";
import { useStore } from "react-redux";
import { Store } from "redux";
import { UserLogin } from "services/API/usersAPI";
import { ACTIONS } from "store/actions";

export default function useAuth() {
  const store = useStore();
  const [token, setToken] = useState(selectToken(store));

  /**
   * Selecciona el token que hay en el store de Redux
   * @param store el store de Redux
   * @returns devuelve el token almacenado en el store
   */
  function selectToken(store: Store): string {
    return store.getState()["apiReducer"]["token"];
  }

  /**
   * Esta función realiza el login del usuario
   * @param user usuario con username y password para hacer el login
   */
  const login = (user: UserLogin): void => {
    store.dispatch({
      type: ACTIONS.API.LOGIN_REQUEST,
      payload: {
        user,
      },
    });
  };

  /**
   * Comprueba si hay un usuario auténticado en la app
   * @returns si el existe un usuario auténticado en la app
   */
  const isAuth = (): Boolean => {
    return Boolean(token);
  };

  /**
   * Se comprueba si el token cambia para actualizar
   * el estado de la autenticación
   */
  store.subscribe(() => {
    setToken(selectToken(store));
  });

  return { isAuth, login, token };
}
