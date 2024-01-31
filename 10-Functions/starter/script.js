'use strict';
// Coding Challenge #1
const poll = {
  question: 'What is the best programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answer: new Array(4).fill(0),
  registerNewAnswer() {
    const choice = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    choice >= 0 && choice < this.options.length && typeof choice === 'number'
      ? this.answer[choice]++
      : alert('Bad input, see the options to select!');

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    type === 'array' && console.log(`Poll results: ${this.answer}`);
    type === 'string' && console.log(`Poll results: ${this.answer.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answer: [5, 2, 3] }); // this works becauase the first argument is the ibject we bind the method to
poll.displayResults.call({ answer: [1, 5, 3, 9, 6, 1] }, 'string'); // this as well, and then the string 'string' is the second argument in the call method which is the first argument in the displayResults method.
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

/*****************************************************************************/

// Coding Challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
