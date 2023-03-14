let play = document.querySelector(".play");
let roll = document.querySelector(".roll");
let dice = document.querySelector("dice1");
let player1 = document.querySelector(".palyer1");
let player2 = document.querySelector(".palyer2");
let theme = document.querySelector(".theme");
let none = document.querySelector(".none");
let help = document.querySelector(".help");

let bw = document.querySelector(".bw");
let num;
play.addEventListener("click", function () {
  document.querySelector(".hiddenplay").style.display = "none";
});
roll.addEventListener("click", function () {
  let num = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".dice1").src = `dice-${num}.png`;
});
theme.addEventListener("click", function () {
  document.querySelector(".hiddentheme").style.display = "block";
  document.querySelector(".hiddenplay").style.display = "none";
});
none.addEventListener("click", function () {
  document.querySelector(".hiddentheme").style.display = "none";
  document.querySelector(".hiddenplay").style.display = "block";
  document.querySelector(".background").style.background =
    "linear-gradient(to right,#rr0000, #00bb00)";
});
bw.addEventListener("click", function () {
  document.querySelector(".hiddentheme").style.display = "none";
  document.querySelector(".hiddenplay").style.display = "block";
  document.querySelector(".background").style.background =
    "linear-gradient(to right,#000000, #ffffff)";
});
document.querySelector(".bg").addEventListener("click", function () {
  document.querySelector(".hiddentheme").style.display = "none";
  document.querySelector(".hiddenplay").style.display = "block";
});
document.querySelector(".home").addEventListener("click", function () {
  document.querySelector(".hiddenplay").style.display = "block";
});
help.addEventListener("click", function () {
  document.querySelector(".hiddenhelp").style.display = "block";
});
document.querySelector(".bg1").addEventListener("click", function () {
  document.querySelector(".hiddenhelp").style.display = "none";
});
