import { render, screen } from "@testing-library/react";
import Branding from "./Branding";

describe("Branding Component Tests", function () {
  it("should render and contain a div element", function () {
    render(<Branding />);
    const div = screen.queryByRole("branding");
    expect(div).toBeInTheDocument();
  });

  it("should contain a logo", function () {
    render(<Branding />);
    const logo = screen.queryByRole("logo");
    expect(logo).toBeInTheDocument();
  });
});
