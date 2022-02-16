export {}
const utilmax = require("../src");

describe("type", () => {
  test("isWeekend()", () => {
    expect(utilmax.isWeekend(new Date(2019, 0, 1))).toBe(false);
  })
})


