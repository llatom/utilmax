export {}
const utilmax = require("../src");

describe("math", () => {
  test("validateEmail()", () => {
    expect(utilmax.validateEmail('pealstyle@gmail.com')).toBe(true);
  })
})