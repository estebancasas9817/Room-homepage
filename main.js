const arrow__right = document.querySelector('.arrow__right');
const arrow__left = document.querySelector('.arrow__left');
const box = document.querySelector('.box');
const box__heading = document.querySelector('.box__heading');
const box__text = document.querySelector('.box__text');
let img1 = true;
let img2 = false;
let img3 = false;
arrow__right.addEventListener('click', function () {
	if (img1 === true) {
		box.style.backgroundImage = 'url(./images/desktop-image-hero-2.jpg)';
		img1 = false;
		img2 = true;
		img3 = false;
		// hidden1.classList.toogle('.hidden');
		box__heading.textContent = 'We are available all across the globe';
		box__text.textContent =
			"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
	} else if (img2 === true) {
		box.style.backgroundImage = 'url(./images/desktop-image-hero-3.jpg)';
		img1 = false;
		img2 = false;
		img3 = true;
		box__heading.textContent = 'Manufactured with the best materials';
		box__text.textContent =
			'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.';
	} else if (img3 === true) {
		box.style.backgroundImage = 'url(./images/desktop-image-hero-1.jpg)';
		img1 = true;
		img2 = false;
		img3 = false;
		box__heading.textContent = 'Discover innovative ways to decorate';
		box__text.textContent =
			'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
	}
});
arrow__left.addEventListener('click', function () {
	if (img1 === true) {
		box.style.backgroundImage = 'url(./images/desktop-image-hero-3.jpg)';
		img1 = false;
		img2 = false;
		img3 = true;
		box__heading.textContent = 'Manufactured with the best materials';
		box__text.textContent =
			'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.';
	} else if (img3 === true) {
		box.style.backgroundImage = 'url(./images/desktop-image-hero-2.jpg)';
		img1 = false;
		img2 = true;
		img3 = false;
		box__heading.textContent = 'We are available all across the globe';
		box__text.textContent =
			"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
	} else if (img2 === true) {
		box.style.backgroundImage = 'url(./images/desktop-image-hero-1.jpg)';
		img1 = true;
		img2 = false;
		img3 = false;
		box__heading.textContent = 'Discover innovative ways to decorate';
		box__text.textContent =
			'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
	}
});
