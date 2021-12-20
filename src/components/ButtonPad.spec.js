import { render, screen } from "@testing-library/react";
import ButtonPad from "./ButtonPad";
import Button from "./Button";

describe("ButtonPad Component Tests", function () {
  it("should render and contain a div element", function () {
    render(
      <ButtonPad>
        <Button
          onClick={(f) => f}
          label="1"
          value="1"
          action={false}
          size={2}
        />
      </ButtonPad>
    );
    const div = screen.queryByRole("container");
    expect(div).toBeInTheDocument();
  });
});
