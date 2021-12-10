import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "../pages/LandingPage";

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

  it("should render the social links", () => {
    render(<LandingPage />);
    const githubIcon = screen.getByRole("button", {
      name: /link to Github account of Arshad shah/i,
    });
    const linkedInIcon = screen.getByRole("button", {
      name: /link to Linkedin account of Arshad shah/i,
    });
    const mailIcon = screen.getByRole("button", {
      name: /link to mail account of Arshad shah/i,
    });

    expect(githubIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
    expect(mailIcon).toBeInTheDocument();
  });

  it("should render the scroll down button", () => {
    render(<LandingPage />);
    const scrollDownButton = screen.getByRole("button", {
      name: /scroll down button/i,
    });
    expect(scrollDownButton).toBeInTheDocument();
  });
});
