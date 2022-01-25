import { ACTIONS } from "./actions";

let initialState = {
  loading: false,
  token: "",
  error: "",
};
export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.API.LOGIN_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.API.LOGIN_RECEIVED_TOKEN:
      return { ...state, loading: false, token: action.payload.token };
    case ACTIONS.API.LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return { ...state };
  }
}
