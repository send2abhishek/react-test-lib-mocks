import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocklate", imagePath: "/images/chocklate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
      ])
    );
  }),
  rest.get("http://localhost:3030/topping", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Hot fudge", imagePath: "/images/hot-fudge.png" },
        {
          name: "Peanut butter cups",
          imagePath: "/images/peanut-butter-cups.png",
        },
      ])
    );
  }),
];
