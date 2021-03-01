let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let symbol = ["&diams;", "&hearts;", "&spades;", "&clubs;"]; //diamond, heart, spade, club

let symbolHeader = document.getElementById("card-header-symbol");
let cardNumber = document.getElementById("card-number");
let symbolFooter = document.getElementById("card-footer-symbol");

window.onload = function() {
  //write your code here

  let symbolRandom = Math.floor(Math.random() * symbol.length);
  let cardNumberRandom = Math.floor(Math.random() * number.length);

  if (
    symbol[symbolRandom] === "&diams;" || symbol[symbolRandom] === "&hearts;") {
    symbolHeader.style.color = "red";
    symbolFooter.style.color = "red";
  }

  if (symbolRandom === "&clubs;" || symbolRandom === "&spades;") {
    symbolHeader.style.color = "black";
    symbolFooter.style.color = "black";
  }

  symbolHeader.innerHTML = symbol[symbolRandom];
  cardNumber.innerHTML = number[cardNumberRandom];
  symbolFooter.innerHTML = symbol[symbolRandom];
};
