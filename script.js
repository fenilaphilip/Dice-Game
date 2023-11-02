var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(randomNumber1);
console.log(randomNumber2);
var randomImageSrc1 = "./images/dice" + randomNumber1 + ".png";
var randomImageSrc2 = "./images/dice" + randomNumber2 + ".png";
console.log(randomImageSrc1);
console.log(randomImageSrc2);

document.querySelector(".img1").setAttribute("src", randomImageSrc1);
document.querySelector(".img2").setAttribute("src", randomImageSrc2);

var showWinner = "";
if (randomNumber1 > randomNumber2) {
  showWinner = " Player 1 won";
} else if (randomNumber2 > randomNumber1) {
  showWinner = " Player 2 won";
} else {
  showWinner = "Draw";
}

document.querySelector("h1").innerHTML = showWinner;
