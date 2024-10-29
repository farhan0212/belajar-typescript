import { add, subtract } from "../src/calculator";

describe("Calculator", () => {
  test("add should correctly add two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtract should correctly subtract two numbers", () => {
    expect(subtract(2, 1)).toBe(1);
    expect(subtract(1, 2)).toBe(-1);
  });
});
