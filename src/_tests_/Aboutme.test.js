import React from "react";
import { render, screen } from "@testing-library/react";
import Aboutme from "../pages/Aboutme";

describe("Aboutme of the site:", () => {
  it("should render with all the information in it", () => {
    const { container } = render(<Aboutme />);
    expect(container).toMatchSnapshot();
  });

  it("should render the 'About Me' heading in aboutme", () => {
    render(<Aboutme />);
    const heading = screen.getByText("About Me");
    expect(heading).toBeInTheDocument();
  });
});
