import { ACTIONS } from "./actions";

let initialState = {
  loading: false,
  token: "",
  error: "",
};
const TOKEN_KEY = "LaLiga.loginToken";

export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.API.LOGIN_REQUEST:
      return { ...state, error: "", loading: true };
    case ACTIONS.API.LOGIN_RECEIVED_TOKEN:
      localStorage.setItem(TOKEN_KEY, action.token.token);
      return { ...state, loading: false, token: action.token };
    case ACTIONS.API.LOGIN_ERROR:
      return { ...state, loading: false, error: action.error };
    case ACTIONS.API.RECOVER_LOCAL_TOKEN:
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) return { ...state, error: "", loading: false, token };
      else return { ...state };
    default:
      return { ...state };
  }
}
