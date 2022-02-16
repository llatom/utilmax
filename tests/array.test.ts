export {}
const utilmax = require("../src");

describe("type", () => {
  test("union()", () => {
    expect(utilmax.union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  })
})


