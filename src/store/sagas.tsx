import { all, call, put, takeLatest } from "redux-saga/effects";
import { usersAPI } from "services/API/usersAPI";
import { ACTIONS } from "./actions";

function* loginUser(action) {
  try {
    console.log(action.payload.user);
    const token = yield call(usersAPI.login, action.payload.user);
    console.log(token);
    if (token.hasOwnProperty("error")) {
      const { error } = token;
      yield put({ type: ACTIONS.API.LOGIN_ERROR, error });
      return;
    }
    yield put({ type: ACTIONS.API.LOGIN_RECEIVED_TOKEN, token });
  } catch (e) {
    let error = "";
    if (typeof e === "string") {
      error = e;
    }
    if (e instanceof Error) {
      error = e.message;
    }
    yield put({ type: ACTIONS.API.LOGIN_ERROR, error });
  }
}

function* loginUserSaga() {
  yield takeLatest(ACTIONS.API.LOGIN_REQUEST, loginUser);
}

export default function* rootSaga() {
  yield all([loginUserSaga()]);
}
