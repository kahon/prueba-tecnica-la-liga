import { stringify } from "querystring";
import { GetUsersResponse, usersAPI } from "../usersAPI";

describe("test de userApi login", () => {
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

describe("usersAPI test getUsers", () => {
  test("debe devolver un resultado del tipo correcto.", async () => {
    const result = await usersAPI.getUsers();
    expect(Boolean(result.data)).toBe(true);
    expect(Boolean(result.total)).toBe(true);
    expect(Boolean(result.total_pages)).toBe(true);
    expect(Boolean(result.page)).toBe(true);
    expect(Boolean(result.support)).toBe(true);
  });
});
