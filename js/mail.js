const form = document.getElementById('form');
const formName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    Email.send({
	Host: 'smtp.gmail.com',
	Username: 'tunjibamise94@gmail.com',
	Password: '@94Oluwabamise',
	To: 'tunjibamise94@gmail.com',
	From: `${email.value}`,
	Subject: `${formName.value}`,
	Body: `Name: ${formName.value} <br/> Email: ${email.value} <br/> Phone: ${phone.value} <br/> Message: ${message.value}`
    }).then((message) => alert(message));

    formName.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';

});

    