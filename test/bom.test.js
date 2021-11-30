const utilmax = require("../src");

describe("Bom functions", () => {
  test("copyToClipboard()", () => {
    expect(utilmax.copyToClipboard("test")).toBe(true);
  });
  test("getScrollPosition()", () => {
    expect(utilmax.getScrollPosition()).toEqual({ x: 0, y: 0 });
  });
  test("getURLParameters()", () => {
    expect(utilmax.getURLParameters()).toEqual({});
  });
  test("redirect()", () => {
    expect(utilmax.redirect("test")).toBe(true);
  });
  test("scrollTo()", () => {
    expect(utilmax.scrollTo(0, 0)).toBe(true);
  });
  test("stringfyQueryString()", () => {
    expect(utilmax.stringfyQueryString({})).toBe("");
  });
  test("validateCssKey()", () => {
    expect(utilmax.validateCssKey("test")).toBe(true);
  });
  test("toSearch()", () => {
    expect(utilmax.toSearch({})).toBe("");
  });
});
