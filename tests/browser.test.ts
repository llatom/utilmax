export {}
const utilmax = require("../src");

describe("type", () => {
  test("getURLParameters()", () => {
    expect(utilmax.getURLParameters("http://localhost:3000/?a=1&b=2")).toEqual({
      a: "1",
      b: "2"
    });
  })
})


