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
  test("forOwn()", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const fn = jest.fn();
    utilmax.forOwn(obj, fn);
    expect(fn).toBeCalledTimes(3);
    expect(fn).toBeCalledWith(1, "a", obj);
    expect(fn).toBeCalledWith(2, "b", obj);
    expect(fn).toBeCalledWith(3, "c", obj);
  })
})