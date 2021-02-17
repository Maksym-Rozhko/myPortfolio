new WOW().init();

let mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
      },
});

const inputNameEl = document.querySelector('.input-name');
const inputPhoneEl = document.querySelector('.input-phone');
const textareaEl = document.querySelector('.text-message');
const formBtnEl = document.querySelector('.form-button');

function InputInvalidStyles(input) {
  input.style.fontSize = '15px';
  input.style.outlineColor = 'red';
  input.value = '';
  input.focus();
}

function userName(name) {
  let letters = /^[A-Za-z]+$/;
  if(name.value.match(letters)){
    return true;
  } else {
    name.placeholder = 'must have letters alphabet only';
    InputInvalidStyles(name)
    return false;
  }
}

function userPhone(phone) {
  let digits = /^\d+$/;
  if(phone.value.match(digits)){
    return true;
  } else {
    phone.placeholder = 'Only digits of your phone number';
    InputInvalidStyles(phone)
    return false;
  }
}

formBtnEl.addEventListener('click', (e) => {
  userName(inputNameEl);
  userPhone(inputPhoneEl);
});
