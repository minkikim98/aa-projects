const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const CallCenter = require("../problems/07-call-me-later");

describe("CallCenter", function () {
  it("should invoke the sayHello method after a specified time", function (done) {
    let startTime = new Date();
    let msecs = 500;

    this.timeout(msecs + 500);

    let john = new CallCenter("John");
    john.sayHello = function() {
      let endTime = new Date();
      let diff = endTime - startTime;
      assert.equal(diff >= msecs - 10, true);
      assert.equal(diff <= msecs + 10, true);
      done();
    }
    john.callMeLater(msecs);
  });
});
