import React from "react";
import { render, screen } from "@testing-library/react";
import Desktop from "../components/navigation/Desktop";

describe("Desktop of the site:", () => {
  it("should render Desktop menu with the About me link", () => {
    render(<Desktop />);
    const aboutme = screen.getByText("About Me");
    expect(aboutme).toBeInTheDocument();
  });

  it("should render Desktop menu with the Projects link", () => {
    render(<Desktop />);
    const Projects = screen.getByText("Projects");
    expect(Projects).toBeInTheDocument();
  });

  it("should render Desktop menu with the Resume link", () => {
    render(<Desktop />);
    const Resume = screen.getByText("Resume");
    expect(Resume).toBeInTheDocument();
  });

  it("should render Desktop", () => {
    const { container } = render(<Desktop />);
    expect(container).toMatchSnapshot();
  });
});
