import React from "react";
import { render } from "@testing-library/react";
import UserListPage from "..";
import store from "store";
import { Provider } from "react-redux";

test("renders userList", () => {
  const { getByText } = render(
    <Provider store={store}>
      <UserListPage />
    </Provider>
  );
  const linkElement = getByText(/Lista de Usuarios/i);
  expect(linkElement).toBeInTheDocument();
});
