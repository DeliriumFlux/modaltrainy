"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // modal open/close functionality
  var modal = document.querySelector('.modal'),
      btnOpenModal = document.querySelectorAll('[data-modal]'),
      btnCloseModal = document.querySelector('[data-close]'),
      overlay = document.querySelector('.overlay');

  function openCloseModal() {
    modal.classList.toggle('show');
    overlay.classList.toggle('show');
    modal.classList.toggle('fade');

    if (modal.classList.contains('show')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  btnOpenModal.forEach(function (btn) {
    btn.addEventListener('click', openCloseModal);
  });
  btnCloseModal.addEventListener('click', openCloseModal);
  overlay.addEventListener('click', function (ev) {
    if (ev.target === overlay) {
      openCloseModal();
    }
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.code === 'Escape' && modal.classList.contains('show')) {
      openCloseModal();
    }
  });
});
//# sourceMappingURL=script.dev.js.map
