const utilmax = require("../src");

describe("Object functions", () => {
  test("deepClone()", () => {
    const a = {
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
    };
    const b = utilmax.deepClone(a);
    expect(a).toEqual(b);
    expect(a).not.toBe(b);
    expect(a.b).not.toBe(b.b);
  });
  test("getTypeOf()", () => {
    expect(utilmax.getTypeOf(null)).toBe("null");
    expect(utilmax.getTypeOf(undefined)).toBe("undefined");
    expect(utilmax.getTypeOf(1)).toBe("number");
    expect(utilmax.getTypeOf("1")).toBe("string");
    expect(utilmax.getTypeOf(true)).toBe("boolean");
    expect(utilmax.getTypeOf(() => {})).toBe("function");
    expect(utilmax.getTypeOf({})).toBe("object");
    expect(utilmax.getTypeOf([])).toBe("array");
    expect(utilmax.getTypeOf(new Date())).toBe("date");
    expect(utilmax.getTypeOf(/a/)).toBe("regexp");
    expect(utilmax.getTypeOf(new Error())).toBe("error");
    expect(utilmax.getTypeOf(new Map())).toBe("map");
    expect(utilmax.getTypeOf(new Set())).toBe("set");
    expect(utilmax.getTypeOf(new WeakMap())).toBe("weakmap");
    expect(utilmax.getTypeOf(new WeakSet())).toBe("weakset");
  });
  test("isObjEmpty()", () => {
    expect(utilmax.isObjEmpty({})).toBe(true);
    expect(utilmax.isObjEmpty({ a: 1 })).toBe(false);
  });
});
