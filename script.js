//Variables
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

// Randomize dice function

function diceRoll() {
  let randomRoll = Math.floor(Math.random() * 6) + 1;
  return randomRoll;
}

//Roll dice twice and place result in variables
let roll1 = diceRoll();
let roll2 = diceRoll();

//Use randomized dice roll to display correct image
dice1.src = `images/dice${roll1}.png`;
dice2.src = `images/dice${roll2}.png`;

//Compare dice rolls and change text
if (roll1 > roll2) {
  h1.textContent = "🚩 Player 1 Wins";
} else if (roll1 < roll2) {
  h1.textContent = "Player 2 Wins 🚩";
} else {
  h1.textContent = "Draw!";
}
