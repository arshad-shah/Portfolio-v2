import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders about me link", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/About Me/i);
  expect(linkElement[0]).toBeInTheDocument();
});
