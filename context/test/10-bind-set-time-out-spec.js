const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const boundfuncTimer = require("../problems/10-bind-set-time-out");

describe("boundfuncTimer", function () {
  it("should invoke the sayHello method after a specified time", function (done) {
    let startTime = new Date();
    let msecs = 500;

    this.timeout(msecs + 500);

    function func() {
      let endTime = new Date();
      let diff = endTime - startTime;
      assert.equal(diff >= msecs - 10, true);
      assert.equal(diff <= msecs + 10, true);
      assert.equal(this.name, 'Jimmy');
      done();
    }
    boundfuncTimer({ name: "Jimmy" }, func, msecs);
  });
});
