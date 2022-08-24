/* Шапка сайта */

let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");
let closeMenu = document.querySelector(".page");
let headerMenu = document.querySelector('.slider');

navToggle.addEventListener("click", function () {
   if (navWrapper.classList.contains("actives")) {
      this.setAttribute("aria-expanded", "false");
      this.setAttribute("aria-label", "menu");
      navWrapper.classList.remove("actives");

   } else {
      navWrapper.classList.add("actives");
      this.setAttribute("aria-label", "close menu");
      this.setAttribute("aria-expanded", "true");
   }
});


/* Основной контент  Слайдер*/
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
   showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
   showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
   showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("item");
   var dots = document.getElementsByClassName("slider-dots_item");
   if (n > slides.length) {
      slideIndex = 1;
   }
   if (n < 1) {
      slideIndex = slides.length;
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
}

/* Popup окно на сладйере*/
const formTwo = document.querySelector('.form_two');
const fonUp = document.querySelector('.information_two');
const openForm = document.querySelector('.btn_two');

const closeForm = document.querySelector('.btn-full');


openForm.addEventListener('click', (e) => {
   e.preventDefault();
   formTwo.classList.add('active_1');
   openForm.classList.add('form_up');
});

closeForm.addEventListener('click', () => {
   formTwo.classList.remove('active_1');
   openForm.classList.remove('form_up');
});

document.addEventListener('click', (e) => {
   if (e.target === fonUp) {
      formTwo.classList.remove('active_1');
      openForm.classList.remove('form_up');
   }
});

/**Отправка формы */

 
