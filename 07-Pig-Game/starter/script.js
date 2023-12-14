'use strict';
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn.btn--new');
const btnRoll = document.querySelector('.btn.btn--roll');
const btnHold = document.querySelector('.btn.btn--hold');

let scores, activePlayer, currentScore, playing;

const init = function () {
    diceEl.classList.add('hidden');
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playing = true;
    for (let i = 0; i < scores.length; i++) {
        scores[i] = 0;
        document.querySelector(`#current--${i}`).textContent = 0;
        document.querySelector(`#score--${i}`).textContent = 0;
        document.querySelector(`.player--${i}`).classList.remove('player--active');
        document.querySelector(`.player--${i}`).classList.remove('player--winner');
    }

    document.querySelector('.player--0').classList.add('player--active');
}

init()

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')
    currentScore = 0
    activePlayer = activePlayer > 0 ? 0 : 1;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')

}

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer()
        }
    }
})


btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing = false;
        } else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init);