const utilmax = require("../src");

describe("Moment functions", () => {
  test("formatDate()", () => {
    expect(utilmax.formatDate(new Date("2019-01-01"))).toBe("2019-01-01");
  });
  test("formatPassTime()", () => {
    expect(utilmax.formatPassTime(new Date("2019-01-01"))).toBe("2019-01-01");
  });
  test("formatRemainTime()", () => {
    expect(utilmax.formatRemainTime(new Date("2019-01-01"))).toBe("2019-01-01");
  });
  test("isLeapYear()", () => {
    expect(utilmax.isLeapYear(new Date("2019-01-01"))).toBe(false);
  });
  test("isSameDay()", () => {
    expect(
      utilmax.isSameDay(new Date("2019-01-01"), new Date("2019-01-01"))
    ).toBe(true);
  });
  test("monthDays()", () => {
    expect(utilmax.monthDays(new Date("2019-01-01"))).toBe(31);
  });
  test("timeLeft()", () => {
    expect(utilmax.timeLeft(new Date("2019-01-01"))).toBe(0);
  });
  test("timestampToTime()", () => {
    expect(utilmax.timestampToTime(new Date("2019-01-01"))).toBe("2019-01-01");
  });
});
