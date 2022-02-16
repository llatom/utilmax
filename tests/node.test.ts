export {}
const utilmax = require("../src");

describe("node", () => {
  test("isNode()", () => {
    expect(utilmax.isNode()).toBe(true);
  })
})