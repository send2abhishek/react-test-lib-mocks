import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("display images for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images

  const scoopImages = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocklate scoop", "Vanilla scoop"]);
});

test("display images for each topping option from server", async () => {
  render(<Options optionType="topping" />);

  // find images

  const scoopImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(scoopImages).toHaveLength(2);
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Hot fudge topping", "Peanut butter cups topping"]);
});
