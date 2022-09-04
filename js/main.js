// hamburger menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
	btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});

// typing animation script
var typed = new Typed('.typing', {
	strings: ['Developer', 'Freelancer', 'Designer', 'Blogger'],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

// AOS intialisation
AOS.init({
	delay: 200,
	duration: 1500,
	once: false,
	mirror: false
});

// scroll to top
// Get the button
let myBtn = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 300 ||
		document.documentElement.scrollTop > 300
	) {
		myBtn.style.display = 'block';
	} else {
		myBtn.style.display = 'none';
	}
}
// When the user clicks on the button, scroll to the top of the document
myBtn.addEventListener('click', backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
	// using contraint API
	isValid = form.checkValidity();
}

function storeFormData() {
	const user = {
		name: form.name.value,
		email: form.email.value,
		phone: form.phone.value,
		message: form.message.value
	};
	// Do something with user data
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'tunjibamise94@gmail.com',
		Password: '@94Oluwabamise',
		To: 'tunjibamise94@gmail.com',
		From: user.email,
		Subject: 'New Contact Form Enquiry',
		Body: user
	}).then((message) => alert(`thank you for contacting Oluwabamise`));
}

// form eventlistener
form.addEventListener('submit', processFormData);

function processFormData(e) {
	e.preventDefault();

	// validate form
	validateForm();

	// submit data if valid
	if (isValid) {
		storeFormData();
		form.reset();
	}

	form.reset();
}
