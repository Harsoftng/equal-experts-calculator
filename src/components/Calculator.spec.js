import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator Component Tests", function () {
  it("should render and contain a div element", function () {
    render(<Calculator />);
    const div = screen.queryByRole("wrapper");
    expect(div).toBeInTheDocument();
  });
});
