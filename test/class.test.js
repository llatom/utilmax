const utilmax = require("../src");

describe("class functions", () => {
  test("addClass()", () => {
    const element = document.createElement("div");
    utilmax.addClass(element, "test");
    expect(element.className).toBe("test");
  });
  test("hasClass()", () => {
    const element = document.createElement("div");
    element.className = "test";
    expect(utilmax.hasClass(element, "test")).toBe(true);
  });
  test("removeClass()", () => {
    const element = document.createElement("div");
    element.className = "test";
    utilmax.removeClass(element, "test");
    expect(element.className).toBe("");
  });
});
