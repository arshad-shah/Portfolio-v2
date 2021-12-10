import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header of the site:", () => {
  it("should render Header with the creater name in it", () => {
    render(<Header />);
    const creator = screen.getByText(/A Shah/i);
    expect(creator).toBeInTheDocument();
  });

  it("should render the logo", () => {
    render(<Header />);
    const Logo = screen.getByLabelText("Logo");
    expect(Logo).toBeInTheDocument();
  });

  it("should render the Mobile menu", () => {
    render(<Header isMobile />);
    const menu = screen.getByLabelText("mobileMenu");
    expect(menu).toBeInTheDocument();
  });

  it("should render the Desktop menu", () => {
    render(<Header />);
    const menu = screen.getByLabelText("desktopMenu");
    expect(menu).toBeInTheDocument();
  });

  it("should render Header", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
