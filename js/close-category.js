const $categoryInner = $(".add-category__inner");

$(".add-category").click(function () {
	$(".add-category").removeClass("add-category--show");
});

$categoryInner.click(function (e) {
	e.stopPropagation();
});
