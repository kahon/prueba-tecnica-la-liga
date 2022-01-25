import { usersAPI } from "../usersAPI";

test("login obtiene el token del usuario cuando es correcto.", async () => {
  const userMock = { username: "eve.holt@reqres.in", password: "cityslicka" };
  const userToken = await usersAPI.login(userMock);
  expect(userToken).toEqual(
    expect.objectContaining({ token: expect.any(String) })
  );
});

test("si el usuario está vacio devuelve un error", async () => {
  const userMock = { username: "", password: "" };
  const userToken = await usersAPI.login(userMock);
  expect(userToken).toEqual(
    expect.objectContaining({ error: expect.any(String) })
  );
});

test("si el usuario no existe devuelve un error", async () => {
  const userMock = { username: "test", password: "nopuedeexistir" };
  const userToken = await usersAPI.login(userMock);
  expect(userToken).toEqual(
    expect.objectContaining({ error: expect.any(String) })
  );
});
