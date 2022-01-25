import { all, call, put, takeLatest } from "redux-saga/effects";
import { usersAPI } from "services/API/usersAPI";
import { ACTIONS } from "./actions";

function* loginUser(action) {
  try {
    const token = yield call(usersAPI.login, action.payload.user);
    if (token.hasOwnProperty("error")) {
      yield put({ type: ACTIONS.API.LOGIN_ERROR, token });
      return;
    }
    yield put({ type: ACTIONS.API.LOGIN_RECEIVED_TOKEN, token });
  } catch (e) {
    yield put({ type: ACTIONS.API.LOGIN_ERROR, e });
  }
}

function* loginUserSaga() {
  yield takeLatest(ACTIONS.API.LOGIN_REQUEST, loginUser);
}

export default function* rootSaga() {
  yield all([loginUserSaga()]);
}
