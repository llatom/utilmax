const utilmax = require("../src");

describe("Dom functions", () => {
  test("bottomVisible()", () => {
    const div = document.createElement("div");
    div.style.height = "100px";
    div.style.overflow = "auto";
    div.style.position = "absolute";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.right = "0px";
    div.style.bottom = "0px";
    document.body.appendChild(div);
    expect(utilmax.dom.bottomVisible(div)).toBe(true);
    div.style.bottom = "-100px";
    expect(utilmax.dom.bottomVisible(div)).toBe(false);
    document.body.removeChild(div);
  });
  test("elementIsVisibleInViewport()", () => {
    const div = document.createElement("div");
    div.style.height = "100px";
    div.style.overflow = "auto";
    div.style.position = "absolute";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.right = "0px";
    div.style.bottom = "0px";
    document.body.appendChild(div);
    expect(utilmax.dom.elementIsVisibleInViewport(div)).toBe(true);
    div.style.top = "-100px";
    expect(utilmax.dom.elementIsVisibleInViewport(div)).toBe(false);
    document.body.removeChild(div);
  })
  test("frozenScroll()", () => {
    const div = document.createElement("div");
    div.style.height = "100px";
    div.style.overflow = "auto";
    div.style.position = "absolute";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.right = "0px";
    div.style.bottom = "0px";
    document.body.appendChild(div);
    expect(utilmax.dom.frozenScroll(div)).toBe(false);
    div.style.overflow = "hidden";
    expect(utilmax.dom.frozenScroll(div)).toBe(true);
    document.body.removeChild(div);
  })
  test("getStyle()", () => {
    const div = document.createElement("div");
    div.style.height = "100px";
    div.style.overflow = "auto";
    div.style.position = "absolute";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.right = "0px";
    div.style.bottom = "0px";
    document.body.appendChild(div);
    expect(utilmax.dom.getStyle(div, "height")).toBe("100px");
    expect(utilmax.dom.getStyle(div, "overflow")).toBe("auto");
    expect(utilmax.dom.getStyle(div, "position")).toBe("absolute");
    expect(utilmax.dom.getStyle(div, "top")).toBe("0px");
    expect(utilmax.dom.getStyle(div, "left")).toBe("0px");
    expect(utilmax.dom.getStyle(div, "right")).toBe("0px");
    expect(utilmax.dom.getStyle(div, "bottom")).toBe("0px");
    document.body.removeChild(div);
  })
});
