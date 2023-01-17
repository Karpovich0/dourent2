// rate inputs

const RATE_INPUTS_ARRAY = document.querySelectorAll(".add__rate-input");
const RATE_LABELS_ARRAY = document.querySelectorAll(".add__rate-label");

RATE_INPUTS_ARRAY.forEach((item, index) =>
	item.addEventListener("input", function () {
		if (item.value != 0) {
			RATE_INPUTS_ARRAY[index].classList.add("filled");
			RATE_LABELS_ARRAY[index].classList.add("filled");
		} else {
			RATE_INPUTS_ARRAY[index].classList.remove("filled");
			RATE_LABELS_ARRAY[index].classList.remove("filled");
		}
	})
);

// add category

let categoryButtonArray = document.querySelectorAll(".add__category-choose");
addListenerCategory();

let addHiddenInput = document.querySelector(".add__category-hidden");

const ADD_TEMPLATE = document.querySelector("#add-template").content.querySelector(".add__category-choose");
const ADD_CATEGORY = document.querySelector(".add__category-more");
const ADD_CATEGORY_INNER = document.querySelector(".add__category-inner");

ADD_CATEGORY.addEventListener("click", function () {
	const element = ADD_TEMPLATE.cloneNode(true);
	ADD_CATEGORY_INNER.appendChild(element);
	categoryButtonArray = document.querySelectorAll(".add__category-choose");
	addListenerCategory();
});

// open categoty

const ADD_CATEGORY_SECTION = document.querySelector(".add-category");
const ADD_CATEGORY_CLOSE = document.querySelector(".add-category__close--category");
const ADD_CATEGOTY_BUTTON_ARRAY = document.querySelectorAll(".add-category__button");

let currentCattegory = 0;

ADD_CATEGORY_CLOSE.addEventListener("click", function () {
	toogleCategorySection();
});

ADD_CATEGOTY_BUTTON_ARRAY.forEach((item, index) =>
	item.addEventListener("click", function () {
		let category = ADD_CATEGOTY_BUTTON_ARRAY[index].textContent.trim();
		categoryButtonArray[currentCattegory].textContent = category;

		let value = (addHiddenInput.getAttribute("value") + " " + category).trim();

		addHiddenInput.setAttribute("value", value);

		categoryButtonArray[currentCattegory].classList.add("add-category__button--filled");
		toogleCategorySection();
	})
);

function toogleCategorySection() {
	ADD_CATEGORY_SECTION.classList.toggle("add-category--show");
}

function addCategorySection() {
	ADD_CATEGORY_SECTION.classList.add("add-category--show");
}

function addListenerCategory() {
	categoryButtonArray.forEach((item, index) =>
		item.addEventListener("click", function () {
			if (!item.classList.contains("add__category-choose--city")) {
				addCategorySection();
				currentCattegory = index;
			}
		})
	);
}
