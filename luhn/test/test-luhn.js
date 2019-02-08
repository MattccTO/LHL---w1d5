var assert = require("chai").assert;
var luhnCheck = require("../luhn-alg.js");

describe("Luhn Algorithm", function() {
  it("should return true if the number passes the algorithm", function() {
    var accountNum = 79927398713;
    var result = luhnCheck(accountNum);
    assert.isTrue(result);
  });

  it("should return false if the fails the algorithm", function() {
    var accountNum = 79927398714;
    var result = luhnCheck(accountNum);
    assert.isFalse(result);
  });
});