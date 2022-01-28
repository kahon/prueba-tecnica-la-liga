import { RootStateOrAny, useSelector, useStore } from "react-redux";
import { UserLogin } from "services/API/usersAPI";
import { ACTIONS } from "store/actions";

/**
 * Hook que maneja los estados de login del usuario
 * @returns {
 *  isLogged(): función que indica si el usuario está logueado.,
 *  login(user:UserLogin): función que realiza el login a través de la máquina de estados.
 *  logout(): funcion que realiza el cierre de sesión a través de la máquina de estados.
 *  token: string : el token de autenficación recuperado desde el login.
 * }
 */
export default function useAuth() {
  const store = useStore();
  const token = useSelector((state: RootStateOrAny) => state.apiReducer.token);
  /**
   * Esta función realiza el login del usuario
   * @param user usuario con username y password para hacer el login
   */
  const login = (user: UserLogin): void => {
    store.dispatch({
      type: ACTIONS.API.LOGIN.REQUEST,
      payload: {
        user,
      },
    });
  };

  /**
   * Limpia la sesión del usuario en local
   */
  const logout = (): void => {
    store.dispatch({
      type: ACTIONS.API.LOGIN.LOGOUT,
    });
  };

  /**
   * Comprueba si hay un usuario auténticado en la app
   * @returns si el existe un usuario auténticado en la app
   */
  const isLogged = (): Boolean => {
    return Boolean(token);
  };

  return { isLogged, login, logout, token };
}
