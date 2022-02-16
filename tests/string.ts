export {}
const utilmax = require("../src");

describe("string", () => {
  test("hexToRGB()", () => {
    expect(utilmax.hexToRGB("#ff0000")).toEqual('rgb(255, 0, 0)')
    expect(utilmax.hexToRGB("#fff")).toEqual('rgb(255, 255, 255)');
    expect(utilmax.hexToRGB("#27ae60ff")).toEqual('rgba(39, 174, 96, 255)');
  })
})