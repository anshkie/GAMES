"use strict";
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("NO NUMBER");
    document.querySelector(".correct").textContent = "ATLEAST TYPE SOMETHING";
    score--;
  }
  if (guess > 20) {
    document.querySelector(".correct").textContent = "THE LIMIT IS 20";
    score--;
    document.querySelector(".score").textcontent = score;
    document.querySelector("body").style.backgroundColor = "#813981";
  } else {
    if (guess === secret) {
      document.querySelector(".main").textContent = secret;

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".correct").textContent = "CORRECT GENIUS😁😁";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".high").textContent = highscore;
      }
    } else if (guess !== secret) {
      if (guess > secret) {
        document.querySelector(".correct").textContent = "TOO HIGH😫😫";
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = "#627483";
      } else {
        document.querySelector(".correct").textContent = "TOO LOW😢😢";
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = "#637823";
      }
    }
  }
});
document.querySelector(".hello").addEventListener("click", function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  console.log("hi");
  document.querySelector(".correct").textContent = "Start guessing...";
  console.log("hey");
  //displayMessage("Start guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".main").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".main").style.width = "15rem";
});
