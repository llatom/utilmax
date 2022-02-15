const utilmax = require("../src");

describe("algorithm", () => {
  test("luhnCheck()", () => {
    expect(utilmax.luhnCheck("79927398713"));
  });
});
