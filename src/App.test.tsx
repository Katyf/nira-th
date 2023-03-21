import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("correctly renders the page", () => {
    render(<App />);
    const containerElement = screen.getByTestId("app-container");
    expect(containerElement).toBeInTheDocument();
  });
});
