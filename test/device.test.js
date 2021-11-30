const utilmax = require("../src");

describe("Device functions", () => {
  test("getEnvironment()", () => {
    expect(utilmax.getEnvironment()).toBe("test");
  });
  test("getExplore()", () => {
    expect(utilmax.getExplore()).toBe("test");
  });
  test("inAndroid()", () => {
    expect(utilmax.inAndroid()).toBe(false);
  });
  test("inBrowser()", () => {
    expect(utilmax.inBrowser()).toBe(false);
  });
  test("inIOS()", () => {
    expect(utilmax.inIOS()).toBe(false);
  });
  test("inNodeJS()", () => {
    expect(utilmax.inNodeJS()).toBe(false);
  });
  test("inTaro()", () => {
    expect(utilmax.inTaro()).toBe(false);
  });
  test("inWechatWebView()", () => {
    expect(utilmax.inWechatWebView()).toBe(false);
  });
});
