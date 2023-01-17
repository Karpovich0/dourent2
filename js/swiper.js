// close-open
const CLOSE_SWIPER = document.querySelector(".swiper-close");
const GALLERY = document.querySelector(".gallery");
const ITEM_IMG_ARRAY = document.querySelectorAll(".item__img");
let swiper;
ITEM_IMG_ARRAY.forEach((item, index) =>
	item.addEventListener("click", function () {
		generateSlider(item, index);
		initSlider();
		setTimeout(function () {
			GALLERY.classList.add("gallery--visible");
		}, 40);
	})
);

CLOSE_SWIPER.addEventListener("click", function () {
	GALLERY.classList.remove("gallery--visible");
	swiper.destroy(true, true);
	destroySlider();
});
// generate slider

const SLIDE_TEMPLATE = document.querySelector("#slide-template").content.querySelector(".swiper-slide");
const SWIPER_WRAPPER = document.querySelector(".swiper-wrapper");

function generateSlider(item) {
	const imgArray = item.querySelectorAll(".item__img-inner");

	imgArray.forEach((item, index) => {
		const element = SLIDE_TEMPLATE.cloneNode(true);
		element.querySelector("img").setAttribute("src", imgArray[index].getAttribute("src"));
		SWIPER_WRAPPER.appendChild(element);
	});
}

function destroySlider() {
	SWIPER_WRAPPER.innerHTML = "";
}

function initSlider() {
	swiper = new Swiper(".swiper", {
		speed: 400,
		spaceBetween: 50,
		grabCursor: true,
		loop: true,
		navigation: {
			prevEl: ".button-prev",
			nextEl: ".button-next",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
}
