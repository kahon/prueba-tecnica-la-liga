import { all, call, put, takeLatest } from "redux-saga/effects";
import { GetUsersResponse, usersAPI } from "services/API/usersAPI";
import { ACTIONS } from "./actions";

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
    let error = "";
    if (typeof e === "string") {
      error = e;
    }
    if (e instanceof Error) {
      error = e.message;
    }
    yield put({ type: ACTIONS.API.LOGIN.ERROR, error });
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
  } catch (error) {}
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
