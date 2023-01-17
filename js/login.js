const AUTH = document.querySelector(".login__switch--auth");
const REGISTRATION = document.querySelector(".login__switch--registration");

const INNER_REGISTRATION = document.querySelector(".login__inner--registration");
const INNER_AUTH = document.querySelector(".login__inner--auth");

const RESTORE = document.querySelector(".login__button--restore");
const INNER_RESTORE = document.querySelector(".login__inner--restore");

const REGISTRATION_NEXT = document.querySelector(".login__button--registration-next");

const INNER_REGISTRATION_CODE = document.querySelector(".login__inner--registration-code");

const BACK_BUTTON = document.querySelector(".login__back-button");

const REGISTRATION_LAST_STEP = document.querySelector(".login__button--registration-last-step");
const REGISTRATION_NAME_PASSWORD = document.querySelector(".login__inner--name-password");

const REGISTRATION_EMAIL = document.querySelector(".login__input--email");
const REGISTRATION_CODE = document.querySelector(".login__input--code");

let registrationStep = 1;

AUTH.addEventListener("click", function () {
	AUTH.classList.add("login__switch--active");
	REGISTRATION.classList.remove("login__switch--active");
	INNER_AUTH.classList.add("login--visible");
	INNER_REGISTRATION.classList.remove("login--visible");
	INNER_RESTORE.classList.remove("login--visible");
	INNER_REGISTRATION_CODE.classList.remove("login--visible");
	REGISTRATION_NAME_PASSWORD.classList.remove("login--visible");
});

REGISTRATION.addEventListener("click", function () {
	AUTH.classList.remove("login__switch--active");
	INNER_AUTH.classList.remove("login--visible");
	INNER_RESTORE.classList.remove("login--visible");
	REGISTRATION.classList.add("login__switch--active");
	if (registrationStep === 2) {
		registrationNext();
	} else if (registrationStep === 3) {
		registrationLastStep();
	} else {
		INNER_REGISTRATION.classList.add("login--visible");
		INNER_REGISTRATION_CODE.classList.remove("login--visible");
		REGISTRATION_NAME_PASSWORD.classList.remove("login--visible");
	}
});

RESTORE.addEventListener("click", function () {
	AUTH.classList.remove("login__switch--active");
	REGISTRATION.classList.remove("login__switch--active");
	INNER_RESTORE.classList.add("login--visible");
	INNER_AUTH.classList.remove("login--visible");
	INNER_REGISTRATION.classList.remove("login--visible");
});

REGISTRATION_NEXT.addEventListener("click", function (e) {
	if (checkFieldsValidity(REGISTRATION_EMAIL)) {
		registrationNext();
	}
	e.preventDefault();
});

REGISTRATION_LAST_STEP.addEventListener("click", function (e) {
	if (checkCodeValidity(REGISTRATION_CODE)) {
		registrationLastStep();
	}
	e.preventDefault();
});

BACK_BUTTON.addEventListener("click", function (e) {
	AUTH.classList.remove("login__switch--active");
	REGISTRATION.classList.add("login__switch--active");
	INNER_AUTH.classList.remove("login--visible");
	INNER_REGISTRATION.classList.add("login--visible");
	INNER_RESTORE.classList.remove("login--visible");
	INNER_REGISTRATION_CODE.classList.remove("login--visible");
});
REGISTRATION_EMAIL.addEventListener("input", function () {
	checkFieldsValidity(REGISTRATION_EMAIL);
});

function registrationNext() {
	registrationStep = 2;
	INNER_REGISTRATION.classList.remove("login--visible");
	INNER_REGISTRATION_CODE.classList.add("login--visible");
}

function registrationLastStep() {
	registrationStep = 3;
	INNER_REGISTRATION_CODE.classList.remove("login--visible");
	REGISTRATION_NAME_PASSWORD.classList.add("login--visible");
}

function checkFieldsValidity(input) {
	if (input.value !== "") {
		if (!input.validity.typeMismatch) {
			input.reportValidity();
			return true;
		} else {
			showValididyMessage(input);
			return false;
		}
	} else {
		showValididyMessage(input);
		return false;
	}
}
function checkCodeValidity(input) {
	if (input.value !== "") {
		return true;
	} else {
		showValididyMessage(input);
		return false;
	}
}

function showValididyMessage(input) {
	input.reportValidity();
}
