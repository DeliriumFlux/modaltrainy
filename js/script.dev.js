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
  }); // email promo validation

  var emailInput = document.querySelector('#email'),
      promoBtn = document.querySelector('.btn-promo');
  promoBtn.addEventListener('click', function () {
    if (emailInput.value === '') {
      alert('Введите ваш E-mail');
    } else {
      alert('Промокод добавлен');
    }
  }); // order functionality

  var btnAddToCart = document.querySelector('.btn__round-plus'),
      btnRemoveFromCart = document.querySelector('.btn__round-minus'),
      btnSubmit = document.querySelector('.btn-submit'),
      productNumbers = document.querySelector('.modal__product-numbers'),
      numberGoods = document.querySelector('.modal__numbergoods'),
      priceForm = document.querySelector('.modal__price'),
      totalPrice = document.querySelector('.modal__totalprice'),
      checkbox = document.querySelector('#checkoffert'),
      basePrice = 1790;
  var count = 1;

  function updatePrice() {
    priceForm.textContent = basePrice;
    return "".concat(basePrice * count, "\u20BD");
  }

  function countsAndNumberOfGoods() {
    productNumbers.textContent = count;
    numberGoods.textContent = "\u0422\u043E\u0432\u0430\u0440\u044B (".concat(count, ")");
  }

  function addAndRemoveCard() {
    if (count > 0) {
      btnAddToCart.addEventListener('click', function () {
        count++;
        countsAndNumberOfGoods();
        totalPrice.textContent = updatePrice();
      });
      btnRemoveFromCart.addEventListener('click', function () {
        count--;
        countsAndNumberOfGoods();

        if (count <= 0) {
          count = 1;
          countsAndNumberOfGoods();
        }

        totalPrice.textContent = updatePrice();
      });
    }
  }

  function submitProduct() {
    btnSubmit.addEventListener('click', function (ev) {
      ev.preventDefault();

      if (checkbox.checked) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      } else {
        alert('Согласитесь с условиями');
      }
    });
  }

  updatePrice();
  addAndRemoveCard();
  submitProduct();
});
//# sourceMappingURL=script.dev.js.map
