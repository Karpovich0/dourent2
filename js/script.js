const START_ARRAY = document.querySelectorAll(".star");

const STATISTIC_BUTTON_ARRAY = document.querySelectorAll(".item__statistic--button");
const PHONE_ARRAY = document.querySelectorAll(".item__phone");

const ITEM_REPORT_ARRAY = document.querySelectorAll(".item__report");
const REPORT = document.querySelector(".report");
const REPORT_CLOSE = document.querySelector(".report__close");

// switch bookmarks star on click
START_ARRAY.forEach((item, index) =>
	item.addEventListener("click", function () {
		START_ARRAY[index].classList.toggle("filled");
	})
);

// show phone number to click
STATISTIC_BUTTON_ARRAY.forEach((item, index) =>
	item.addEventListener("click", function () {
		STATISTIC_BUTTON_ARRAY[index].classList.add("hidden");
		PHONE_ARRAY[index].classList.add("show");
	})
);

// show popup for report
ITEM_REPORT_ARRAY.forEach((item) =>
	item.addEventListener("click", function () {
		REPORT.classList.add("report--show");
	})
);

// close popup for report
REPORT_CLOSE.addEventListener("click", function () {
	REPORT.classList.remove("report--show");
});
