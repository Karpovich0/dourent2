// convert file to a base64 url
const readURL = (file) => {
	return new Promise((res, rej) => {
		const reader = new FileReader();
		reader.onload = (e) => res(e.target.result);
		reader.onerror = (e) => rej(e);
		reader.readAsDataURL(file);
	});
};

// for demo
const FILE_LABEL_ARRAY = document.querySelectorAll(".add__file-label");
const FILE_INPUT_ARRAY = document.querySelectorAll(".input-file");
const IMG_ARRAY = document.querySelectorAll(".add__img");

function addImg(index) {
	const preview = async (event) => {
		const file = event.target.files[0];
		const url = await readURL(file);
		IMG_ARRAY[index].src = url;
		FILE_LABEL_ARRAY[index].classList.add("add__file-label--hidden");
		IMG_ARRAY[index].classList.add("add__img--active");
	};
	return preview;
}

FILE_INPUT_ARRAY.forEach((item, index) => {
	item.addEventListener("change", addImg(index));
});
