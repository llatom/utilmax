export {}
const utilmax = require("../src");

describe("type", () => {
  test("union()", () => {
    expect(utilmax.union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  })
  test("deepFlatten()", () => {
    expect(utilmax.deepFlatten([1, 2, 3, [4, 5, [6, 7], 8]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]);
  })
  test("difference()", () => {
    expect(utilmax.difference([1, 2, 3, 4, 5], [5, 2, 10])).toEqual([1, 3, 4]);
  })
  test("flatten()", () => {
    expect(utilmax.flatten([1,[2],3,4])).toEqual([
      1,
      2,
      3,
      4,
    ]);
  })
  test("groupBy()", () => {
    expect(utilmax.groupBy([1.3, 2.1, 2.4], Math.floor)).toEqual({
      1: [1.3],
      2: [2.1, 2.4]
    });
  })
})


