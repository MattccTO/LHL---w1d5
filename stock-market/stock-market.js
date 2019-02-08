function myProfit(prices) {

  var maxDiff = 0;
  var pointerBuy = 0;
  var pointerSell = 0;

  for (var i in prices) {
    for (var j = i; j < prices.length; j++) {
      if (maxDiff < (prices[j] - prices[i])) {
        maxDiff = prices[j] - prices[i];
        pointerBuy = i;
        pointerSell = j;
      }
    }
  }
  return `Max Profit: Buy at ${prices[pointerBuy]} & sell at ${prices[pointerSell]} to make ${maxDiff}`;
};

todaysPrices = [45,24,35,31,40,38,11];

console.log(myProfit(todaysPrices));
