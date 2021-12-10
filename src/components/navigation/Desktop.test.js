import React from "react";
import { render, screen } from "@testing-library/react";
import Desktop from "./Desktop";

describe("Desktop of the site:", () => {
  it("should render Desktop menu with 3 buttons", () => {
    render(<Desktop />);
    const menuItem = screen.getAllByLabelText("menuItem");
    expect(menuItem.length).toEqual(3);
  });
  it("should render Desktop menu with the About me button", () => {
    render(<Desktop />);
    const aboutme = screen.getByText("About Me");
    expect(aboutme).toBeInTheDocument();
  });

  it("should render Desktop menu with the Projects button", () => {
    render(<Desktop />);
    const Projects = screen.getByText("Projects");
    expect(Projects).toBeInTheDocument();
  });

  it("should render Desktop menu with the Resume button", () => {
    render(<Desktop />);
    const Resume = screen.getByText("Resume");
    expect(Resume).toBeInTheDocument();
  });

  it("should render Desktop", () => {
    const { container } = render(<Desktop />);
    expect(container).toMatchSnapshot();
  });
});
