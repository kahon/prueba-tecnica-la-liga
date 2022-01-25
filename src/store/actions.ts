export const ACTIONS = {
  API: {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_RECEIVED_TOKEN: "LOGIN_RECEIVED_TOKEN",
    LOGIN_ERROR: "LOGIN_ERROR",
  },
};

export const loginRequest = () => ({ type: ACTIONS.API.LOGIN_REQUEST });
export const loginReceivedToken = (data) => ({
  type: ACTIONS.API.LOGIN_RECEIVED_TOKEN,
  data,
});
