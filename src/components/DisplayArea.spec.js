import { render, screen } from "@testing-library/react";
import DisplayArea from "./DisplayArea";

describe("DisplayArea Component Tests", function () {
  it("should render and contain a div element", function () {
    render(<DisplayArea />);
    const div = screen.queryByRole("display");
    expect(div).toBeInTheDocument();
  });

  it("should correctly render data passed to it", function () {
    const data = "5+2";
    render(<DisplayArea data={data} />);
    const div = screen.queryByRole("display");
    expect(div.innerHTML).toBe(data);
  });
});
