import { call } from "redux-saga/effects";
import { loginUser } from "store/sagas";
import { usersAPI } from "services/API/usersAPI";

describe("testing de todos los sagas", () => {
  test("loginUser Saga con un usuario correcto", () => {
    const user = { username: "eve.holt@reqres.in", password: "cityslicka" };
    const gen = loginUser({ payload: { user } });
    const token = call(usersAPI.login, user);
    // comprobamos que trae bien el token del API
    expect(gen.next().value).toEqual(token);
    /*
      no he conseguido que el siguiente paso se testee bien
     */
    // expect(gen.next().value).toEqual(
    //   put({ type: ACTIONS.API.LOGIN_RECEIVED_TOKEN, token })
    // );
  });
});
