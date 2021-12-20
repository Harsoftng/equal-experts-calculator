import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const value = "1";
const label = "1";
const size = 2;

describe("Button Component Tests", function () {
  describe("UI Tests", function () {
    it("should be a button element", function () {
      render(<Button value={value} label={label} onClick={(f) => f} />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should correctly display/render assigned labels", function () {
      render(<Button value={value} label={label} onClick={(f) => f} />);
      const button = screen.getByRole("button");
      expect(button.innerHTML).toBe(label);
    });

    it("should have a data-value attribute", function () {
      render(<Button value={value} label={label} onClick={(f) => f} />);
      const button = screen.getByRole("button");
      expect(button.getAttribute("data-value")).toBe(value);
    });

    it("should have a data-size attribute", function () {
      render(
        <Button value={value} label={label} size={size} onClick={(f) => f} />
      );
      const button = screen.getByRole("button");
      const sizeValue = parseInt(button.getAttribute("data-size"));
      expect(sizeValue).toBe(size);
    });

    it("should have a data-action attribute", function () {
      render(
        <Button value={value} label={label} size={size} onClick={(f) => f} />
      );
      const button = screen.getByRole("button");
      const action = button.getAttribute("data-action");
      expect(action).toBe("false");
    });
  });

  describe("Interaction Tests", function () {
    it("should call the onClick handler function when the button is clicked", function () {
      const mockFn = jest.fn();
      render(
        <Button value={value} label={label} size={size} onClick={mockFn} />
      );
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
