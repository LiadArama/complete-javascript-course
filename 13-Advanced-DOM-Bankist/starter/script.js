'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
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
  console.log(e.target.getBoundingClientRect());

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const alertH1 = function (event) {
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

const tabsBtns = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab'); // we used closest becaue if any other element that is inside the tab is clicked, it would still work

  if (!clicked) return;

  tabsBtns.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(content => {
    content.classList.remove('operations__content--active');
  });

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

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

// const h1children = h1.querySelectorAll('.highlight');
// console.log(h1children.childNodes()); // Not used
// console.log(h1children.children()); // Far more used

// h1.firstElementChild.style.color = 'white'; // firstElementChild is used to select the first element child
// h1.lastElementChild.style.color = 'orangered'; // lastElementChild is used to select the last element child

// const h1parent = h1;
// console.log(h1parent.parentNode); // Not used
// console.log(h1parent.parentElement); // Far more used

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // closest is used to select the closest parent element

// h1.closest('h1').style.background = 'var(--gradient-primary)'; // closest is used to select the closest parent element

// // Going sideways: selecting sibling elements
// console.log(h1.previousElementSibling); // Not used
// console.log(h1.nextElementSibling); // Not used

// console.log(h1.previousSibling); // Not used
// console.log(h1.nextSibling); // Not used

// console.log(h1.parentElement.children);

const nav = document.querySelector('.nav');

const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// window.addEventListener('scroll', function () {
//   const initialCoords = section1.getBoundingClientRect();
//   console.log(initialCoords);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// const observerCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// // };
// const observer = new IntersectionObserver(observerCallBack, observerOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //around -90px
});
headerObserver.observe(header);

const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // this is bascially sectionObserver.
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  // this is for the initial loading of the page
  // we attach the observer, and then hiding all the section elements, as an initial state.
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  //entry.target.classList.remove('lazy-img') // We dont want to do this since on slower networks the pictures will still be blurry until they are loaded into the page. by doing this we remove the class right away. so we use the event listener for that because when the image is finished loading, a load event pops, and only then we want to remove the lazy-img class.

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
