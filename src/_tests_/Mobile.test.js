import React from "react";
import { render, screen } from "@testing-library/react";
import Mobile from "../components/navigation/Mobile";

const closeMobileMenu = jest.fn();
const handleMenu = jest.fn();
describe("Mobile layout of the site:", () => {
  it("should render Mobile menu with the opening hamburger button", () => {
    render(
      <Mobile
        click={false}
        closeMobileMenu={closeMobileMenu}
        handleMenu={handleMenu}
      />
    );
    const menuIcon = screen.getByLabelText("menu toggle");
    expect(menuIcon).toBeInTheDocument();
  });

  it("should render Mobile menu with the About me link", () => {
    render(
      <Mobile
        click={false}
        closeMobileMenu={closeMobileMenu}
        handleMenu={handleMenu}
      />
    );
    const aboutme = screen.getByText("About Me");
    expect(aboutme).toBeInTheDocument();
  });

  it("should render Mobile menu with the Projects link", () => {
    render(
      <Mobile
        click={false}
        closeMobileMenu={closeMobileMenu}
        handleMenu={handleMenu}
      />
    );
    const Projects = screen.getByText("Projects");
    expect(Projects).toBeInTheDocument();
  });

  it("should render Mobile menu with the Resume link", () => {
    render(
      <Mobile
        click={false}
        closeMobileMenu={closeMobileMenu}
        handleMenu={handleMenu}
      />
    );
    const Resume = screen.getByText("Resume");
    expect(Resume).toBeInTheDocument();
  });

  it("should render Mobile", () => {
    const { container } = render(
      <Mobile
        click={false}
        closeMobileMenu={closeMobileMenu}
        handleMenu={handleMenu}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
