// Dice 1

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceNumber = "dice" + randomNumber1 + ".png";
var randomDice = "images/" + randomDiceNumber;

var targetImage1 = document.querySelectorAll("img")[0];

targetImage1.setAttribute("src", randomDice);


//Dice 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceNumber1 = "images/dice" + randomNumber2 + ".png"
var targetImage2 = document.querySelectorAll("img")[1];
targetImage2.setAttribute("src", randomDiceNumber1);

//Display winner
if (randomNumber1 > randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins";
}
else{
  document.getElementsByTagName("h1")[0].innerHTML = "Draw"
}
