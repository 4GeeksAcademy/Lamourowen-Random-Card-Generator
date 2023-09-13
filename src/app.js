/* eslint-disable */
import "./style.css";

//window.onload = function() {
//  //write your code here

//  let cardFlip = ["K", "Q"];
//   let picIcons = ["♦", "♥", "♠", "♣"];
//   document.querySelector(".top-suite").innerHTML = picIcons[0];
//   console.log("Everything is working");
//
//};

window.onload = () => {
  let randomSuit = generateRandomSuit();
  if (randomSuit == "♦" || randomSuit == "♥") {
    document
      .querySelectorAll(".suit")
      .forEach(element => (element.style.color = "red"));
  }
  document
    .querySelectorAll(".suit")
    .forEach(element => (element.innerHTML = randomSuit));
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];

  let indexSuit = Math.floor(Math.random() * suit.length);
  console.log(suit[indexSuit]);
  return suit[indexSuit];
};
