var cash = process.argv.slice(2);

function poppinBottles(cash) {
  var currentBottles = cash / 2;
  var numEmpties = 0;
  var numCaps = 0;
  // var totalBottles = currentBottles;

  var tally = {
    'Total Bottles': currentBottles,
    'Remaining Empties': 0,
    'Remaining Caps': 0,
    'Earned Bottles': {
      Bottles: 0,
      Caps: 0
    }

  };


  while (currentBottles > 0 || tally['Remaining Empties'] >= 2 || tally['Remaining Caps'] >= 4) {
    //Drink Pops
    tally['Remaining Empties'] += currentBottles;
    tally['Remaining Caps'] += currentBottles;
    currentBottles = 0;

    //Trade in
    currentBottles = Math.floor(tally['Remaining Empties'] / 2) + Math.floor(tally['Remaining Caps'] / 4);
    tally['Earned Bottles'].Bottles += Math.floor(tally['Remaining Empties'] / 2);
    tally['Earned Bottles'].Caps += Math.floor(tally['Remaining Caps'] / 4);
    tally['Remaining Empties'] = tally['Remaining Empties'] % 2;
    tally['Remaining Caps'] = tally['Remaining Caps'] % 4;
    tally['Total Bottles'] += currentBottles;
  }
  return tally;
}

console.log(poppinBottles(cash));
