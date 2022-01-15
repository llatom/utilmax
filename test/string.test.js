const utilmax = require("../src");

describe("String functions", () => {
  test("digitUppercase()", () => {
    expect(utilmax.digitUppercase(1)).toBe("一");
    expect(utilmax.digitUppercase(2)).toBe("二");
    expect(utilmax.digitUppercase(3)).toBe("三");
    expect(utilmax.digitUppercase(4)).toBe("四");
    expect(utilmax.digitUppercase(5)).toBe("五");
    expect(utilmax.digitUppercase(6)).toBe("六");
    expect(utilmax.digitUppercase(7)).toBe("七");
    expect(utilmax.digitUppercase(8)).toBe("八");
    expect(utilmax.digitUppercase(9)).toBe("九");
  });
});
