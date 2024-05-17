'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (event) {
  const s1coords = section1.getBoundingClientRect();
  console.log(e.targer.getBoundingClientRect());

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const alertH1 = function (event) {
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

///////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const msg = document.createElement('div');
// msg.classList.add('cookie-message'); // adding class to the element
// msg.textContent = 'We use cookies for improved functionality and analytics.';
// msg.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.append(msg);

// header.append(msg.cloneNode(true));

// header.before(msg);
// header.after(msg);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     msg.parentElement.removeChild(msg);
//   });

// msg.style.backgroundColor = '#37383d';
// msg.style.width = '120%';
// console.log(msg.style.backgroundColor);
// // Output: rgb(55, 56, 61)

// console.log(msg.height);
// // Output: ''

// console.log(getComputedStyle(msg).height);

// msg.style.height =
//   Number.parseFloat(getComputedStyle(msg).height, 10) + 40 + 'px';

// //Since the CSS variable are decalred under the root, we would need to use the documentElement to access the root element
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// // Non-standard
// console.log(logo.designer);
// // Output: undefined
// console.log(logo.getAttribute('designer'));
// // Output: Jonas

// logo.alt = 'Beautiful minimalist logo';

// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// // Output: http://127.0.0.1:8000/img/logo.png

// console.log(logo.getAttribute('src'));
// // Output: img/logo.png

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// // Output: http://127.0.0.1:8000/#

// console.log(link.getAttribute('href'));
// // Output: #

// console.log(logo.dataset.versionNumber);
// // Output: 3.0

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// logo.className = 'jonas'; // Don't use this method

// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// console.log(window.pageXOffset, window.pageYOffset);
// console.log(
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', event.target, event.currentTarget);
//   });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     console.log('CONTAINER', event.target, event.currentTarget);
//   });

// document.querySelector('.nav').addEventListener('click', function (event) {
//   event.stopPropagation();
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', event.target, event.currentTarget);
// });

// document
//   .querySelector('.nav__linkS')
//   .addEventListener('click', function (event) {
//     // event handling...
//   });

// document
//   .querySelector('.nav__linkS')
//   .addEventListener('click', function (event) {
//     if (event.target.classList.contains('nav__linK')) {
//       // handling the click event on <li> element
//     }
//   });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (event) {
//     if (event.target.classList.contains('nav__link')) {
//       event.preventDefault();
//       // handling the click event on <li> element
//     }
//

const h1children = h1.querySelectorAll('.highlight');
console.log(h1children.childNodes()); // Not used
console.log(h1children.children()); // Far more used

h1.firstElementChild.style.color = 'white'; // firstElementChild is used to select the first element child
h1.lastElementChild.style.color = 'orangered'; // lastElementChild is used to select the last element child

const h1parent = h1;
console.log(h1parent.parentNode); // Not used
console.log(h1parent.parentElement); // Far more used

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // closest is used to select the closest parent element

h1.closest('h1').style.background = 'var(--gradient-primary)'; // closest is used to select the closest parent element

// Going sideways: selecting sibling elements
console.log(h1.previousElementSibling); // Not used
console.log(h1.nextElementSibling); // Not used

console.log(h1.previousSibling); // Not used
console.log(h1.nextSibling); // Not used

console.log(h1.parentElement.children);
