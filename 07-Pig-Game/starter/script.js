'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn.btn--new');
const btnRoll = document.querySelector('.btn.btn--roll');
const btnHold = document.querySelector('.btn.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

diceEl.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')
        currentScore = 0
        activePlayer = activePlayer > 0 ? 0 : 1;
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')

    }
})


btnHold.addEventListener('click', function () {
    scores[activePlayer] += currentScore;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    //Need to update UI when clicking hold.

})