const utilmax = require("../src");

describe("image functions", () => {
  test("dataURLtoFile()", () => {
    expect(
      utilmax.dataURLtoFile(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE7SURBVDhP1ZMtjoRAEEY5AIIDIBCIkUgEYiQCgUAgECMQCO4yB0AgkAgEAoFAIBBIJIIDjEAgEIiaVKdmO738iM2K3ZeQzldpXofqQoJf5h8L+76HOI7hfr+DpmlgmiZEUQRt29KOY3bCZVnYi6qqwvP5hKZpYJom6LqOZawHQcD2HbEToszzPJjnmSoiKHo8HuD7PlVEBGFZlqDr+unpH7ZtA8MwIM9zqnAEYRiGkGUZpWvwcNd1KXEEIZ46DAOla7AliqJQ4gjC2+0G4zhSugbbIssyJY4gxGYf9eWIqqrAtm1KHEFYFAX77HVdqXIMXoplWZAkCVU4ghDBGcPnTIoyHC3HcagishNis3HG8O9I0/Srp7jiBGCf8XZfrxerf2cn/FDXNRtwnEtJktiKGXt3xanwp/x1IcAb6tAxUiS/ItUAAAAASUVORK5CYII="
      ).type
    ).toBe("image/jpeg");
  });
});
