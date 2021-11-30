const utilmax = require("../src");

describe("Number functions", () => {
  test("commafy()", () => {
    expect(utilmax.commafy(123456789)).toBe("123,456,789");
    expect(utilmax.commafy(123)).toBe("123");
  });
  test("random()", () => {
    expect(utilmax.random(1, 10)).toBeLessThanOrEqual(10);
    expect(utilmax.random(1, 10)).toBeGreaterThanOrEqual(1);
  });
});
