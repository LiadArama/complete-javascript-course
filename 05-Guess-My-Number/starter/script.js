'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.btn.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = 'No number! 😒';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.btn.check').disabled = true;
        document.querySelector('.btn.check').style.backgroundColor = '#eee';
        document.querySelector('.guess').disabled = true;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        if (score > 1) {
            const messageScore = guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
            score--;
            document.querySelector('.message').textContent = messageScore;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game! 😢';
            document.querySelector('.score').textContent = 0;
        }
    }
});

/*
Coding Challenge #1
*/
document.querySelector('.btn.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.guess').value = '';
    console.log('inside event listener guess is ', document.querySelector('.guess').value);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.btn.check').disabled = false;
    document.querySelector('.guess').disabled = false;
});


//###############################################################################//
