// city

const ADD_CATEGORY_CLOSE_CITY = document.querySelector(".add-category__close--city");

const ADD_CITY_SECTION = document.querySelector(".add-category--city");

ADD_CATEGORY_CLOSE_CITY.addEventListener("click", function () {
	toogleCitySection();
});

function toogleCitySection() {
	ADD_CITY_SECTION.classList.toggle("add-category--show");
}

const ADD_CITY_BUTTONS = document.querySelectorAll(".add__city-button");
const ADD_CITY = document.querySelector(".add__category-choose--city");
const ADD_HIDDEN_CITY = document.querySelector(".add__category-hidden--city");
const ADD_CHOOSE_CITY = document.querySelector(".add__category-choose--city");
ADD_CHOOSE_CITY.addEventListener("click", function () {
	toogleCitySection();
});

ADD_CITY_BUTTONS.forEach((item, index) =>
	item.addEventListener("click", function () {
		ADD_CITY.textContent = item.textContent;
		ADD_HIDDEN_CITY.setAttribute("value", item.textContent);
		toogleCitySection();
		ADD_CHOOSE_CITY.classList.add("filled");
	})
);
