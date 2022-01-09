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

describe("String functions", () => {
  test("dataURLtoFile()", () => {
    expect(
      utilmax.dataURLtoFile(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE7SURBVDhP1ZMtjoRAEEY5AIIDIBCIkUgEYiQCgUAgECMQCO4yB0AgkAgEAoFAIBBIJIIDjEAgEIiaVKdmO738iM2K3ZeQzldpXofqQoJf5h8L+76HOI7hfr+DpmlgmiZEUQRt29KOY3bCZVnYi6qqwvP5hKZpYJom6LqOZawHQcD2HbEToszzPJjnmSoiKHo8HuD7PlVEBGFZlqDr+unpH7ZtA8MwIM9zqnAEYRiGkGUZpWvwcNd1KXEEIZ46DAOla7AliqJQ4gjC2+0G4zhSugbbIssyJY4gxGYf9eWIqqrAtm1KHEFYFAX77HVdqXIMXoplWZAkCVU4ghDBGcPnTIoyHC3HcagishNis3HG8O9I0/Srp7jiBGCf8XZfrxerf2cn/FDXNRtwnEtJktiKGXt3xanwp/x1IcAb6tAxUiS/ItUAAAAASUVORK5CYII="
      ).type
    ).toBe("image/jpeg");
  });
});
