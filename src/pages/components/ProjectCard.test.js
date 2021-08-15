import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard of the site:", () => {
  const data = [
    {
      heading: "Portfolio website version 1.0",
      description:
        "A Portfolio site that contains all the work i have done so far. Includes work from college such as exercises, projects and also from outside college such as the android app.This is the first version written in pure HTML, CSS and javascript with a pinch of jquery.",
      languages: "HTML | CSS | Javascript | jQuery",
      linkAriaLabel: "link to Github for portfolio version 1",
      repoLink: "https://github.com/arshad-shah/arshad-shah.github.io",
    },
  ];

  it("should render ProjectCard with all the information in it", () => {
    const { container } = render(<ProjectCard {...data} />);
    expect(container).toMatchSnapshot();
  });
});
