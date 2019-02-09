var cash = process.argv.slice(2);

function poppinBottles(cash) {
  var currentBottles = cash / 2;
  var numEmpties = 0;
  var numCaps = 0;
  // var totalBottles = currentBottles;

  var tally = {
    'Total Bottles': currentBottles,
    'Earned Bottles': {
      Bottles: 0,
      Caps: 0
    }

  };


  while (currentBottles > 0 || numEmpties >= 2 || numCaps >= 4) {
    //Drink Pops
    numEmpties += currentBottles;
    numCaps += currentBottles;
    currentBottles = 0;

    //Trade in
    currentBottles = Math.floor(numEmpties / 2) + Math.floor(numCaps / 4);
    tally['Earned Bottles'].Bottles += Math.floor(numEmpties / 2);
    tally['Earned Bottles'].Caps += Math.floor(numCaps / 4);
    numEmpties = numEmpties % 2;
    numCaps = numCaps % 4;
    tally['Total Bottles'] += currentBottles;
  }
  return tally;
}

console.log(poppinBottles(cash));


/*
10 b 10t
0b  10e 10c

5b 0e
7b 2c

17t

0b 7e 9c

3b 1e
5b 1c

22t

0b 6e 6c
3b 0e
4b 2c

26t

0b 4e 6c
2b 0e
3b 2c

29t

0b 3e 5c
1b 1e
2b 1c

31t

0b 3e 3c
1b 1e 3c

32

0b 2e 4c
1b 0e
2b 0c

34t

0b 2e 2c
1b 0e 2c

35t

0b 1e 3c


*/