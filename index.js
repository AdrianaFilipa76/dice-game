var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var winnerHeading = document.querySelector("h1");

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceImage1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceImage2);


if (randomDiceImage1 > randomDiceImage2) {
    winnerHeading.innerHTML = "🏅 Player 1 Wins!"
} else if (randomDiceImage2 > randomDiceImage1){
    winnerHeading.innerHTML = "Player 2 Wins! 🏅"
} else {
    winnerHeading.innerHTML = "☠️ No winner ☠️"
}