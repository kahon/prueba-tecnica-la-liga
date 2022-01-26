import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "..";
import { Provider } from "react-redux";
import store from "store";

describe("Test LoginForm", () => {
  test("debe renderizar el form", () => {
    const { container } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    expect(Boolean(container.querySelector("form"))).toBe(true);
  });
  test("debe renderizar al menos un input", () => {
    const { container } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    expect(Boolean(container.querySelector("input"))).toBe(true);
  });
  test("debe renderizar un button", () => {
    const { container } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    expect(Boolean(container.querySelector("button"))).toBe(true);
  });
});
