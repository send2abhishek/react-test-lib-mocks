import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("update scoop subtotal when scoops changes", async () => {
  render(<Options optionType="scoops" />, {
    wrapper: OrderDetailsProvider,
  });

  const scoopSubTotal = screen.getByText("Scoops total :", {
    exact: false,
  });
  expect(scoopSubTotal).toHaveTextContent("0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: /vanilla/i,
  });

  const user = userEvent.setup();

  // await user.clear();
  // await user.type(vanillaInput, "1");
  // expect(scoopSubTotal).toHaveTextContent("2.00");

  // // choclate

  // const chocolateInput = await screen.findByRole("spinbutton", {
  //   name: /chocolate/i,
  // });

  // await user.clear();
  // await user.type(chocolateInput, "2");
  // expect(scoopSubTotal).toHaveTextContent("6.00");
});
