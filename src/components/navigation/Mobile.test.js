import React from "react";
import { render, screen } from "@testing-library/react";
import Mobile from "./Mobile";

describe("Mobile of the site:", () => {
  it("should render Mobile menu with the opening hamburger button", () => {
    render(<Mobile />);
    const menuIcon = screen.getByRole("button");
    expect(menuIcon).toBeInTheDocument();
  });

  it("should render Mobile", () => {
    const { container } = render(<Mobile />);
    expect(container).toMatchSnapshot();
  });
});
