var researchList = [];

var listSorter = function() {
  return researchList.sort(function(a,b) {
    return a - b;
  });
};

module.exports = {
  listFiller: function(num) {
    researchList.push(num);
    // console.log(researchList);
  },
  listOutput: function() {
    console.log(listSorter());
  }
};

