// Write a program that will convert a dollar amount to the number of coins that make up the amount. 
// Use the common American coins of quarters, dimes, nickels, and pennies.
/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var toConvert = document.getElementById("toConvert")
var newDollar = toConvert.value;
var dollars = newDollar * 100;

function coinCounter() {
    // Initialize a JavaScript object to hold the coins
    var coinPurse = {

        quarters: "",
        dimes: "",
        nickels: "",
        pennies: ""
    };

    var quarters = Math.floor(dollars / 25);
    var remainder = dollars - (quarters * 25);
    var dimes = Math.floor(remainder / 10);
    remainder = remainder - (dimes * 10);
    var nickels = Math.floor(remainder / 5);
    remainder = remainder - (nickels * 5);
    pennies = Math.floor(remainder / 1); //Math.round...
    remainder = remainder - (pennies * 1);

    coinPurse.quarters = quarters;
    coinPurse.dimes = dimes;
    coinPurse.nickels = nickels;
    coinPurse.pennies = pennies;

    return coinPurse;
}

function price(keypress) {
    if (keypress.which === 13) {
        newDollar = toConvert.value;
        dollars = newDollar * 100;

        console.log("counter:", coinCounter());
    }
};
var coins = coinCounter()
console.log(coins);

toConvert.addEventListener("keypress", price);
