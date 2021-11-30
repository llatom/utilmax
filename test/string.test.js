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
    expect(utilmax.digitUppercase(10)).toBe("十");
    expect(utilmax.digitUppercase(11)).toBe("十一");
    expect(utilmax.digitUppercase(12)).toBe("十二");
    expect(utilmax.digitUppercase(13)).toBe("十三");
    expect(utilmax.digitUppercase(14)).toBe("十四");
    expect(utilmax.digitUppercase(15)).toBe("十五");
    expect(utilmax.digitUppercase(16)).toBe("十六");
    expect(utilmax.digitUppercase(17)).toBe("十七");
    expect(utilmax.digitUppercase(18)).toBe("十八");
    expect(utilmax.digitUppercase(19)).toBe("十九");
    expect(utilmax.digitUppercase(20)).toBe("二十");
    expect(utilmax.digitUppercase(21)).toBe("二十一");
    expect(utilmax.digitUppercase(22)).toBe("二十二");
    expect(utilmax.digitUppercase(23)).toBe("二十三");
  });
});
