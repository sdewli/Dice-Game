"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let currentScore, scores, activePlayer, playing;
//intialization connditions;
const init = function () {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("palyer--active");
  player1El.classList.remove("palyer--active");
};

init();
//roll dice funtionality
const switchplayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//roll button functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      console.log(currentScore);
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
});

//hold button funtionality
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      diceEl.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchplayer();
    }
  }
});

//new button functionality
btnNew.addEventListener("click", init);
