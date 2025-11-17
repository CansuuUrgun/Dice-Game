var randomNumber1 =Math.floor((Math.random() * 6) +1);
var randomNumber2 =Math.floor((Math.random() * 6) +1);

console.log(randomNumber1);

var img1Path = "./images/dice" + randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src",img1Path);

var img2Path = "./images/dice" + randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src",img2Path);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerText = "Draw!";
}