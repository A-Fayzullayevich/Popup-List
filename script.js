'use strict';
const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const back = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnsShowModal.length; i++) {
  const open = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  btnsShowModal[i].addEventListener('click', open);
}
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
back.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
