/// <reference path="./setupTests.d.ts" />
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main heading", () => {
  render(<App />);
  const heading = screen.getByText(/EagleEyeTech/i);
  expect(heading).toBeInTheDocument();
});
