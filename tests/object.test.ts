export {}
const utilmax = require("../src");

describe("object", () => {
  test("deepClone()", () => {
    expect(utilmax.deepClone({ a: 1, b: { c: 2 } })).toEqual({
      a: 1,
      b: { c: 2 }
    });
    expect(utilmax.deepClone([1, 2, 3])).toEqual([1, 2, 3]);
    expect(utilmax.deepClone(null)).toBeNull();
  })
})