import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonProps } from "./Button";

const mockOnClick = jest.fn();

describe("Button", () => {
  const renderComponent = () => {
    const props: ButtonProps = {
      onClick: mockOnClick,
      variant: "primary",
      children: "Button text",
    };
    render(<Button {...props} />);
  };

  it("renders without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("renders the button text", () => {
    renderComponent();
    expect(
      screen.getByRole("button", { name: /Button text/i }),
    ).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", async () => {
    renderComponent();
    const button = screen.getByRole("button", { name: /Button text/i });

    userEvent.click(button);

    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
