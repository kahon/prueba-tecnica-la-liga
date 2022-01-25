import { usersAPI } from "../usersAPI";

test("user login get the token", async () => {
  const userMock = { username: "eve.holt@reqres.in", password: "cityslicka" };
  const userToken = await usersAPI.login(userMock);
  expect(userToken).toEqual(
    expect.objectContaining({ token: expect.any(String) })
  );
});

test("user login get error if user empty", async () => {
  const userMock = { username: "", password: "" };
  const userToken = await usersAPI.login(userMock);
  expect(userToken).toEqual(
    expect.objectContaining({ error: expect.any(String) })
  );
});
