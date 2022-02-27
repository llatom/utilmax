export {}
const utilmax = require("../src");

describe("type", () => {
  test("isWeekend()", () => {
    expect(utilmax.isWeekend(new Date(2019, 0, 1))).toBe(false);
  })
  test("getDaysDiffBetweenDates()", () => {
    expect(utilmax.getDaysDiffBetweenDates(new Date(2019, 0, 1), new Date(2019, 0, 2))).toBe(1);
  })
  test("JSONToDate()", () => {
    expect(utilmax.JSONToDate(/Date(1489525200000)/)).toBe("15/3/2017");
  })
})


