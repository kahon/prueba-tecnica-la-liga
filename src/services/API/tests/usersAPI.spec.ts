import { usersAPI } from "../usersAPI";

describe("test de userApi", () => {
  test("login obtiene el token del usuario cuando es correcto.", async () => {
    const user = { username: "eve.holt@reqres.in", password: "cityslicka" };
    const userToken = await usersAPI.login(user);
    expect(userToken).toEqual(
      expect.objectContaining({ token: expect.any(String) })
    );
  });

  test("si el usuario está vacio devuelve un error", async () => {
    const user = { username: "", password: "" };
    const userToken = await usersAPI.login(user);
    expect(userToken).toEqual(
      expect.objectContaining({ error: expect.any(String) })
    );
  });

  test("si el usuario no existe devuelve un error", async () => {
    const user = { username: "test", password: "nopuedeexistir" };
    const userToken = await usersAPI.login(user);
    expect(userToken).toEqual(
      expect.objectContaining({ error: expect.any(String) })
    );
  });
});
