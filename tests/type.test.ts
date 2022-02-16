export {}
const utilmax = require("../src");

describe("type", () => {
  test("equals()", () => {
    expect(utilmax.equals({'a': 'ac'}, {'b': 'bc'}))
    expect(utilmax.equals(new Date(), new Date()))
    expect(utilmax.equals(
      { a: [2, { e: 3 }], b: [4], c: 'foo' },
      { a: [2, { e: 3 }], b: [4], c: 'foo' }
    ))
    expect(utilmax.equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }))
  })
})

describe("type", () => {
  test("isEmpty()", () => {
    expect(utilmax.isEmpty([])).toBe(true)
    expect(utilmax.isEmpty({})).toBe(true)
    expect(utilmax.isEmpty(null)).toBe(true)
    expect(utilmax.isEmpty(undefined)).toBe(true)
    expect(utilmax.isEmpty('')).toBe(true)
    expect(utilmax.isEmpty(0)).toBe(true)
    expect(utilmax.isEmpty({ a: 1, b: 2 })).toBe(false)

  })
})


describe("type", () => {
  test("getType()", () => {
    expect(utilmax.getType(undefined)).toBe('undefined')
    expect(utilmax.getType(new Set([1, 2, 3]))).toBe('Set')
  })
})


describe("type", () => {
  test("is()", () => {
    expect(utilmax.is(Array, [1])).toBe(true)
    expect(utilmax.is(RegExp, /./g)).toBe(true)
  })
})