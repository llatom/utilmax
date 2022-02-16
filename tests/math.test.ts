export {}
const utilmax = require("../src");

describe("math", () => {
  test("validateNumber()", () => {
    expect(utilmax.validateNumber(1)).toBe(true);
    expect(utilmax.validateNumber(1.1)).toBe(true);
    expect(utilmax.validateNumber("1")).toBe(true);
    expect(utilmax.validateNumber("1.1")).toBe(true);
  })
})