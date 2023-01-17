const additionalButtonArray = document.querySelectorAll(".item__more-button");
const additionalIInfoArray = document.querySelectorAll(".item__additional-info");

additionalButtonArray.forEach((item, index) => {
	item.addEventListener("click", function () {
		toggleAdditional(index);
	});
});

function toggleAdditional(index) {
	additionalButtonArray[index].classList.toggle("button-open");
	additionalIInfoArray[index].classList.toggle("additional-open");
}
