import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("LandingPage of the site:", () => {
  it("should render LandingPage with all the information in it", () => {
    const { container } = render(<LandingPage />);
    expect(container).toMatchSnapshot();
  });

  it("should render the Hero text", () => {
    render(<LandingPage />);
    const nameOfArshad = screen.getByText("Arshad Shah!");
    expect(nameOfArshad).toBeInTheDocument();
  });

  it("should render the scroll down button", () => {
    render(<LandingPage />);
    const scrollDownButton = screen.getByLabelText("scroll down button");
    expect(scrollDownButton).toBeInTheDocument();
  });
});
