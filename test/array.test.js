const utilmax = require("../src");

describe("Array functions", () => {
  test("arrayEqual()", () => {
    expect(utilmax.arrayEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(utilmax.arrayEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });
  test("arrayMax()", () => {
    expect(utilmax.arrayMax([1, 2, 3])).toBe(3);
    expect(utilmax.arrayMax([1, 2, 3, 4])).toBe(4);
  });
  test("arrayMin()", () => {
    expect(utilmax.arrayMin([1, 2, 3])).toBe(1);
    expect(utilmax.arrayMin([1, 2, 3, 4])).toBe(1);
  });
  test("chunk()", () => {
    expect(utilmax.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(utilmax.chunk([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });
  test("countOccurrences()", () => {
    expect(utilmax.countOccurrences([1, 2, 3, 4, 5], 3)).toBe(1);
    expect(utilmax.countOccurrences([1, 2, 3, 4, 5], 4)).toBe(1);
    expect(utilmax.countOccurrences([1, 2, 3, 4, 5], 5)).toBe(1);
    expect(utilmax.countOccurrences([1, 2, 3, 4, 5], 6)).toBe(0);
  });
  test("dropElements()", () => {
    expect(utilmax.dropElements([1, 2, 3, 4], (n) => n >= 3)).toEqual([3, 4]);
    expect(utilmax.dropElements([1, 2, 3, 7, 4, 5, 6], (n) => n > 3)).toEqual([
      7, 4, 5, 6,
    ]);
    expect(utilmax.dropElements([1, 2, 3, 7, 4, 5, 6], (n) => n >= 4)).toEqual(
      []
    );
  });
  test("dropRight()", () => {
    expect(utilmax.dropRight([1, 2, 3, 7, 4, 5, 6], 3)).toEqual([1, 2, 3]);
    expect(utilmax.dropRight([1, 2, 3, 7, 4, 5, 6], 2)).toEqual([1, 2]);
    expect(utilmax.dropRight([1, 2, 3, 7, 4, 5, 6], 6)).toEqual([]);
  });
  test("everyNth()", () => {
    expect(utilmax.everyNth([1, 2, 3, 4], 2)).toEqual([1, 3]);
    expect(utilmax.everyNth([1, 2, 3, 4], 3)).toEqual([1]);
    expect(utilmax.everyNth([1, 2, 3, 4], 4)).toEqual([]);
  });
  test("intersection()", () => {
    expect(utilmax.intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(utilmax.intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
  });
  test("noRepeat()", () => {
    expect(utilmax.noRepeat([1, 2, 3, 4, 5, 6])).toEqual(true);
    expect(utilmax.noRepeat([1, 2, 3, 4, 5, 5])).toEqual(false);
  });
  test("nthElement()", () => {
    expect(utilmax.nthElement([1, 2, 3, 4], 3)).toEqual(3);
    expect(utilmax.nthElement([1, 2, 3, 4], 4)).toEqual(4);
    expect(utilmax.nthElement([1, 2, 3, 4], 5)).toEqual(undefined);
  });
  test("shuffle()", () => {
    expect(utilmax.shuffle([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(utilmax.shuffle([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4]);
  });
});
