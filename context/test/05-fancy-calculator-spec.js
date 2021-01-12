const assert = require("assert");

const FancyCalculator = require("../problems/05-fancy-calculator.js");

describe("FancyCalculator", function () {
  let fancyCalculator = new FancyCalculator();
  // set our total to 5
  fancyCalculator.setTotal(5);

  it("square the total", function () {
    assert.equal(fancyCalculator.squared(), 25);
  });
  it("should modulo the total by the arg number", function () {
    assert.equal(fancyCalculator.modulo(4), 1);
  });
});
