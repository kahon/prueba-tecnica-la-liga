import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "..";

describe("Test LoginForm", () => {
  test("debe renderizar el form", () => {
    const { container } = render(<LoginForm />);
    expect(Boolean(container.querySelector("form"))).toBe(true);
  });
  test("debe renderizar al menos un input", () => {
    const { container } = render(<LoginForm />);
    expect(Boolean(container.querySelector("input"))).toBe(true);
  });
  test("debe renderizar un button", () => {
    const { container } = render(<LoginForm />);
    expect(Boolean(container.querySelector("button"))).toBe(true);
  });
});
