var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

var randomImageSrc1 = "./images/dice" + randomNumber1 + ".png";
var randomImageSrc2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImageSrc1);
document.querySelector(".img2").setAttribute("src", randomImageSrc2);
