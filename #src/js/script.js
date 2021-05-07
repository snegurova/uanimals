@@include('libs/smoothScroll.js', {})
@@include('libs/tippy.js', {})
@@include('libs/inputmask.min.js', {})
@@include('functions.js', {})
@@include('sliders.js', {})
@@include('scroll.js', {})
@@include('forms.js', {})
@@include('radio.js', {})
@@include('tippies.js', {})
@@include('dynamicAdapt.js', {})

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

// Move cart product images
const mql = window.matchMedia("(max-width: 940px)");
const cartBody1 = document.querySelector(".cart__body");
const cartImages = document.querySelectorAll(".cart__product-left");
const moveBackElements = document.querySelectorAll(".cart__product-right");
const moveAfterElements = document.querySelectorAll(".product__title");

const replaceElements = () => {
	if (mql.matches && cartImages.length > 0) {
		moveAfterElements.forEach((el, i) => {
			const img = cartImages[i];
			el.insertAdjacentElement('afterend', img);
		});
	} else {
		moveBackElements.forEach((el, i) => {
			el.insertAdjacentElement('beforebegin', cartImages[i]);
		});
	}
};

document.addEventListener('DOMContentLoaded', (event) => {
	replaceElements();
});

mql.addEventListener('change', replaceElements);

//===============================
