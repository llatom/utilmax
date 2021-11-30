const utilmax = require("../src");

describe("Function functions", () => {
  test("debounce()", () => {
    let count = 0;
    const func = utilmax.debounce(() => {
      count++;
    }, 100);
    func();
    func();
    func();
    func();
    expect(count).toBe(0);
    setTimeout(() => {
      expect(count).toBe(1);
    }, 200);
  });
  test("throttle()", () => {
    let count = 0;
    const func = utilmax.throttle(() => {
      count++;
    }, 100);
    func();
    func();
    func();
    func();
    expect(count).toBe(1);
    setTimeout(() => {
      expect(count).toBe(2);
    }, 200);
  });
});
