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
const formResetBtnEl = document.querySelector('.form-reset-button');
const submitSpinLoader = document.querySelector('.spin-loader');

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

formBtnEl.addEventListener('click', () => {
  userName(inputNameEl);
  userPhone(inputPhoneEl);
});

function changeFormContainer() {
  const containerActive = document.querySelector('.contacts-form.form-active');
  const containerInactive = document.querySelector('.contacts-form:not(.form-active)');

  containerActive.classList.remove('form-active');
  containerInactive.classList.add('form-active');
}

function resetForm() {
  inputNameEl.value = ''
  inputPhoneEl.value = ''
  textareaEl.value = ''
}

let testForm = document.querySelector("#contacts form");
      
testForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(testForm);
  fetch(testForm.getAttribute('action'), {
    method: 'POST',
    headers: {
      'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: new URLSearchParams(formData).toString()
  })
  .then(res => {
    if (res) {
      submitSpinLoader.style.display = 'block';
      setTimeout(changeFormContainer, 3000);
      
      setTimeout(resetForm, 500);
    }
  });
});

formResetBtnEl.addEventListener('click', () => {
  changeFormContainer();
  submitSpinLoader.style.display = 'none';
});