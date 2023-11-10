const images = document.querySelectorAll('.slider-block__images img');
const dots = document.querySelectorAll('.dot');
const nextButton = document.getElementById('nextSlide');
let currentIndex = 0;

function showSlide(index) {
	images.forEach(image => (image.style.display = 'none'));
	dots.forEach(dot => dot.classList.remove('active'));
	images[index].style.display = 'block';
	dots[index].classList.add('active');
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % images.length;
	showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);

showSlide(currentIndex);

const burger = document.querySelector('.header__block-icon_mobile');
const closeBurger = document.querySelector('.header__block-icon_mobile-close');
const menu = document.querySelector('.header__back-menu_mobile');
const opacityBlock = document.querySelector('.main__opacity-block');
burger.addEventListener('click', () => {
	menu.style.display = 'block';
	burger.style.display = 'none';
	closeBurger.style.display = 'flex';
	opacityBlock.style.display = 'block';
});

closeBurger.addEventListener('click', () => {
	menu.style.display = 'none';
	burger.style.display = 'block';
	closeBurger.style.display = 'none';
	opacityBlock.style.display = 'none';
});
