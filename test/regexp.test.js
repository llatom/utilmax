const utilmax = require("../src");

describe("Regexp functions", () => {
  test("isEmail()", () => {
    expect(utilmax.isEmail("test")).toBe(false);
    expect(utilmax.isEmail("test@gmail.com")).toBe(true);
  });
  test("isIdCard()", () => {
    expect(utilmax.isIdCard("test")).toBe(false);
    expect(utilmax.isIdCard("411423199102030012")).toBe(true);
  });
  test("isPhoneNum()", () => {
    expect(utilmax.isPhoneNum("test")).toBe(false);
    expect(utilmax.isPhoneNum("13800138000")).toBe(true);
  });
  test("isUrl()", () => {
    expect(utilmax.isUrl("test")).toBe(false);
    expect(utilmax.isUrl("http://www.baidu.com")).toBe(true);
  });
});
