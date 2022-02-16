export {}
const utilmax = require("../src");

describe("device", () => {
  test("inBrowser()", () => {
    expect(utilmax.inBrowser()).toBe(false);
  })
})
describe("device", () => {
    test("inIOS()", () => {
        expect(utilmax.inIOS()).toBe(false);
    })
  })
  describe("device", () => {
    test("inAndroid()", () => {
        expect(utilmax.inAndroid()).toBe(false);
    })
  })
  describe("device inNodeJS", () => {
    test("inNodeJS()", () => {
        expect(utilmax.inNodeJS()).toBe(true);
    })
    })

  describe("device", () => {
    test("inTaro()", () => {
      expect(utilmax.inTaro()).toBe(false);
    })
  })
  describe("device", () => {
    test("inWechatWebView()", () => {
        expect(utilmax.inWechatWebView()).toBe(false);
    })
  })

  describe("device getEnvironment", () => {
    test("getEnvironment()", () => {
        expect(utilmax.getEnvironment()).toBe("node");
    })
 })

  describe("device getExplore", () => {
    test("getExplore()", () => {
        expect(utilmax.getExplore()).toBe("");
    })
    })
  