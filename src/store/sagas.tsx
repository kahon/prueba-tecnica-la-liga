import { all, call, put, takeLatest } from "redux-saga/effects";
import { GetUsersResponse, usersAPI } from "services/API/usersAPI";
import { ACTIONS } from "./actions";

/**
 *
 * @param error: es el error recibido de un catch
 * @returns devuelve el mensaje del error
 */
function errorToMessage(error) {
  let err = "";
  if (typeof error === "string") {
    err = error;
  }
  if (error instanceof Error) {
    err = error.message;
  }
  return err;
}
export function* loginUser(action) {
  try {
    const token = yield call(usersAPI.login, action.payload.user);
    if (token.hasOwnProperty("error")) {
      const { error } = token;
      yield put({ type: ACTIONS.API.LOGIN.ERROR, error });
      return;
    }
    yield put({ type: ACTIONS.API.LOGIN.RECEIVED_TOKEN, token });
  } catch (e) {
    let error = errorToMessage(e);
    yield put({ type: ACTIONS.API.ERROR, error });
  }
}

export function* getUsers(action) {
  try {
    const response: GetUsersResponse = yield call(
      usersAPI.getUsers,
      action.page
    );
    yield put({
      type: ACTIONS.API.USERS.RECEIVE_GET_USERS_DATA,
      users: response,
    });
  } catch (e) {
    let error = errorToMessage(e);
    yield put({ type: ACTIONS.API.ERROR, error });
  }
}

function* getUsersSaga() {
  yield takeLatest(ACTIONS.API.USERS.GET_USERS, getUsers);
}
function* loginUserSaga() {
  yield takeLatest(ACTIONS.API.LOGIN.REQUEST, loginUser);
}

export default function* rootSaga() {
  yield all([loginUserSaga(), getUsersSaga()]);
}
