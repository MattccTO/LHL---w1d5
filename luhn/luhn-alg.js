var luhnAlg = function(accountNum) {
  var digits = accountNum.toString().split("").map(Number);

  for (var i = digits.length - 2; i >= 0; i += -2) {
    var temp = 0;
    temp = digits[i] * 2;
    if (temp > 9) {
      var tempArray = temp.toString().split("").map(Number);
      temp = 0;
      for (var j in tempArray) {
        temp += tempArray[j];
      }
    }
    digits[i] = temp;
  }
  return digits;
};

var luhnCheck = function(accountNum) {
  var algVal = luhnAlg(accountNum);
  var sumVal = 0;
  for (var i in algVal) {
    sumVal += algVal[i];
  }
  return (sumVal % 10 === 0);
};

module.exports = luhnCheck;