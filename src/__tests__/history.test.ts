import History from "../..";
import { data } from "../../data";

it("testing back functionality", () => {
  expect(History.back(1)).toBe(data[0]);
});

it("testing forward functionality", () => {
  expect(History.forward(1)).toBe(data[2]);
});

it("testing go functionality", () => {
  expect(History.go(1, 2)).toBe(data[3]);
  expect(History.go(1, -2)).toBe(undefined);
});
