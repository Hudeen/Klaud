const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === '') {

        document.getElementById('name').style.border = '2px solid #fd6565';
        document.getElementById('alert-message-name').style.opacity = '1';

    } else {

        document.getElementById('name').style.border = '2px solid #0e0e0e';
        document.getElementById('alert-message-name').style.opacity = '0';
    }

    if(emailValue === '') {
        document.getElementById('email').style.border = '2px solid #fd6565';
        document.getElementById('alert-message-email').style.opacity = '1';

    } else if (!isValidEmail(emailValue)) {

        document.getElementById('email').style.border = '2px solid #fd6565';
        document.getElementById('alert-message-email').style.display = 'none';
        document.getElementById('alert-message-email-second').style.opacity = '1';

    } else {
        document.getElementById('email').style.border = '2px solid #0e0e0e';
        document.getElementById('alert-message-email-second').style.opacity = '0';
    }

};

