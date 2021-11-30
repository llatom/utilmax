const utilmax = require("../src");

describe("Cookie functions", () => {
  test("getCookie()", () => {
    expect(utilmax.getCookie("cookie")).toBe("");
    expect(utilmax.getCookie("cookie", "value")).toBe("value");
    expect(utilmax.getCookie("cookie", "value", { path: "/" })).toBe("value");
    expect(
      utilmax.getCookie("cookie", "value", { path: "/", domain: "example.com" })
    ).toBe("value");
    expect(
      utilmax.getCookie("cookie", "value", {
        path: "/",
        domain: "example.com",
        secure: true,
      })
    ).toBe("value");
    expect(
      utilmax.getCookie("cookie", "value", {
        path: "/",
        domain: "example.com",
        secure: true,
        httpOnly: true,
      })
    ).toBe("value");
  });
  test("removeCookie()", () => {
    expect(utilmax.removeCookie("cookie")).toBe(true);
    expect(utilmax.removeCookie("cookie", { path: "/" })).toBe(true);
    expect(
      utilmax.removeCookie("cookie", { path: "/", domain: "example.com" })
    ).toBe(true);
    expect(
      utilmax.removeCookie("cookie", {
        path: "/",
        domain: "example.com",
        secure: true,
      })
    ).toBe(true);
    expect(
      utilmax.removeCookie("cookie", {
        path: "/",
        domain: "example.com",
        secure: true,
        httpOnly: true,
      })
    ).toBe(true);
  });
  test("setCookie()", () => {
    expect(utilmax.setCookie("cookie", "value")).toBe(true);
    expect(utilmax.setCookie("cookie", "value", { path: "/" })).toBe(true);
    expect(
      utilmax.setCookie("cookie", "value", { path: "/", domain: "example.com" })
    ).toBe(true);
    expect(
      utilmax.setCookie("cookie", "value", {
        path: "/",
        domain: "example.com",
        secure: true,
      })
    ).toBe(true);
    expect(
      utilmax.setCookie("cookie", "value", {
        path: "/",
        domain: "example.com",
        secure: true,
        httpOnly: true,
      })
    ).toBe(true);
  });
});
