import { describe } from "./describe.js";
import { expect2 } from "./assertion.js";
import { test as it } from "./test.js";
import {
  asyncMultiplication,
  asyncSubtract,
  multiplication,
  subtract,
} from "./index.js";

describe("This test will check an assertion", () => {
  it("should check if two strings are equal", () => {
    expect2("hei").toBe("hei");
  });
  it("should subtract numbers in an array", () => {
    expect2(subtract([5, 3, 1])).toBe(-9);
  });
  it("should subtract numbers in an array (async)", async () => {
    expect2(await asyncSubtract([5, 3, 1])).toBe(-9);
  });
  it("should multiply two numbers", () => {
    expect2(multiplication(5, 3)).toBe(15);
  });
  it("should multiply two numbers", async () => {
    expect2(await asyncMultiplication(5, 3)).toBe(15);
  });
});
