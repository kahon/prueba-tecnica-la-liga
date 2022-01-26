import { ACTIONS } from "./actions";

let initialState = {
  loading: false,
  token: "",
  error: "",
};

export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.API.LOGIN_REQUEST:
      return { ...state, error: "", loading: true };
    case ACTIONS.API.LOGIN_RECEIVED_TOKEN:
      console.log(action);
      return { ...state, loading: false, token: action.token };
    case ACTIONS.API.LOGIN_ERROR:
      console.log(action);
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
}
