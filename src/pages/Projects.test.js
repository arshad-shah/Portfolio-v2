import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects of the site:", () => {
  it("should render Projects with all the information in it", () => {
    const { container } = render(<Projects />);
    expect(container).toMatchSnapshot();
  });

  it("should have 6 project cards", () => {
    render(<Projects />);
    const numberOfProjects = screen.getAllByLabelText("ProjectCard");
    expect(numberOfProjects.length).toEqual(7);
  });

  it("should render the heading 'Projects'", () => {
    render(<Projects />);
    const heading = screen.getByText("Projects");
    expect(heading).toBeInTheDocument();
  });
});
