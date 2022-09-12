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
	strings: [
		'Web Developer',
		'Freelancer',
		'FrontEnd Dev',
		'UX Designer',
		'Tech Blogger'
	],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

// AOS initialization
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

