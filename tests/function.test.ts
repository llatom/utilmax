export {}
const utilmax = require("../src");

describe("type", () => {
  test("debounce()", () => {
    expect (utilmax.debounce(() => {}, 100)).toBeInstanceOf(Function);
  })
})