const utilmax = require("../src");

describe("algorithm", () => {
  test("luhnCheck()", () => {
    expect(utilmax.luhnCheck("79927398713"));
  });
});


describe("algorithm", () => {
  test("binarySearch()", ()=>{
    expect(utilmax.binarySearch([1, 2, 3, 4, 5], 1))
    expect(utilmax.binarySearch([1, 2, 3, 4, 5], 6))
  })
})