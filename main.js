const arrow__right = document.querySelector('.arrow__right');
const box = document.querySelector('.box');
const box__heading = document.querySelector('.box__heading');
const hidden = document.querySelector('.hidden');
const hiddenText = document.querySelector('.hidden-text');
const box__text = document.querySelector('.box__text');
arrow__right.addEventListener('click', function () {
	let numero = 1;
	if (numero === 1) {
		box.style.backgroundImage = 'url(./images/desktop-image-hero-2.jpg)';
		box__heading.classList.add('hidden');
		hidden.classList.remove('hidden');
		hiddenText.classList.remove('hidden-text');
		box__text.classList.add('hidden');
	} else {
		box.style.backgroundImage = 'url(./images/desktop-image-hero-3.jpg)';
	}
});
