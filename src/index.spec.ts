import { describe } from "./describe.js";
import { expect2 } from "./assertion.js";
import { test as it } from "./test.js";

describe("This test will check an assertion", () => {
  it("should check if two strings are equal", () => {
    expect2("hei").toBe("hei");
  });
  it("should let the user know if two string are not equal", () => {
    expect2("hei").toBe("hei2");
  });
});
