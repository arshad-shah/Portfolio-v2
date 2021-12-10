import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Header of the site:", () => {
  it("should render Header", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
