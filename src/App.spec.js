import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App Component Tests", function () {
  describe("App UI Tests", function () {
    it("should render the calculator", function () {
      render(<App />);
      const app = screen.getByRole("wrapper");
      expect(app).toBeInTheDocument();
    });
  });

  describe("App Interaction Tests", function () {
    it("should test the calculator functionality to make sure its working", function () {
      render(<App />);
      //perform calculation (5 x 10 = 50)

      const btn5 = screen.getByRole("button", { name: "5" });
      const btnMultiplication = screen.getByRole("button", { name: "x" });
      const btn1 = screen.getByRole("button", { name: "1" });
      const btn0 = screen.getByRole("button", { name: "0" });
      const btnEquals = screen.getByRole("button", { name: "=" });

      userEvent.click(btn5);
      userEvent.click(btnMultiplication);
      userEvent.click(btn1);
      userEvent.click(btn0);
      userEvent.click(btnEquals);

      //check the result
      const displayArea = screen.getByRole("display");
      expect(displayArea.innerHTML).toBe("50");
    });
  });
});
