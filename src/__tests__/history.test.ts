import History from "../..";
import { data } from "../../data";

it("testing back functionality", () => {
  expect(History.back(data[1])).toBe(data[0]);
});

it("testing forward functionality", () => {
  expect(History.forward(data[1])).toBe(data[2]);
});

it("testing go functionality", () => {
  expect(History.go(data[1], 2)).toBe(data[3]);
  expect(History.go(data[1], -2)).toBe(undefined);
  expect(History.go(data[1], 5)).toBe(undefined);
});
