import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("initial condition", () => {
  test("should have button and its stated should be disabled", () => {
    render(<SummaryForm />);
    const confirmButton = screen.getByRole("button", {
      name: /Confirm Order/i,
    });

    expect(confirmButton).toBeDisabled();
  });

  test("checkbox should be unchecked", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and condition/i,
    });

    expect(checkbox).not.toBeChecked();
  });
});

describe("when checkbox is checked", () => {
  test("button should be enabled", async () => {
    render(<SummaryForm />);

    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and condition/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /Confirm Order/i,
    });

    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();
    await user.click(checkbox);
    expect(confirmButton).not.toBeEnabled();
  });
});

describe("popover response", () => {
  test("popover should be hidden initially", () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();
  });

  test("popover should appear when hover", async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();
    const termsAndCondition = screen.getByText(/Terms and condition/i);

    await user.hover(termsAndCondition);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndCondition);
    const overlay = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(overlay).not.toBeInTheDocument();
  });
});
