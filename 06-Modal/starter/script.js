'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModal);
}


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

btnCloseModal.addEventListener('keydown', function (event) {
    console.log(event); // Will print all the obkect properties, one of them is "key" which holds the information on what key was pressed.
    console.log(event.key) // Will print the key that was pressed
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})


// let str = [...btnShowModal].map(element => element.textContent).join('');
// btnShowModal.forEach(element => {
//     str += element.textContent;
// });
// console.log(str);