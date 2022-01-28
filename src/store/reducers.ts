import { ACTIONS } from "./actions";

let initialState = {
  loading: false,
  token: "",
  error: "",
  // lista de usuarios a mostrar
  users: {},
};
const TOKEN_KEY_LOCAL_STORAGE = "LaLiga.loginToken";

// TODO refactorizar apiReducer en varios reducers
export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.API.LOGIN.REQUEST:
      return { ...state, error: "", loading: true };
    case ACTIONS.API.LOGIN.RECEIVED_TOKEN:
      localStorage.setItem(TOKEN_KEY_LOCAL_STORAGE, action.token.token);
      return { ...state, loading: false, token: action.token };
    case ACTIONS.API.LOGIN.LOGOUT:
      localStorage.removeItem(TOKEN_KEY_LOCAL_STORAGE);
      return { ...state, error: "", loading: false, token: "" };
    case ACTIONS.API.ERROR:
      return { ...state, loading: false, error: action.error };
    case ACTIONS.API.LOGIN.RECOVER_LOCAL_TOKEN:
      const token = localStorage.getItem(TOKEN_KEY_LOCAL_STORAGE);
      if (token) return { ...state, error: "", loading: false, token };
      else return { ...state };
  }
  switch (action.type) {
    case ACTIONS.API.USERS.GET_USERS:
      return { ...state, error: "", loading: true };
    case ACTIONS.API.USERS.RECEIVE_GET_USERS_DATA:
      return { ...state, loading: false, error: "", users: action.users };
  }
  return { ...state };
}
