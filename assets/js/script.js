const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const allermessage = document.getElementById('alert-message-email');
const allermessagesecond = document.getElementById('alert-message-email-second');
const sucess = document.querySelector('#test');

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

        username.style.border = '2px solid #fd6565';
        allermessage.style.opacity = '1';

    } else {

        username.style.border = '2px solid #0e0e0e';
        allermessage.style.opacity = '0';
    }

    if(emailValue === '') {
        email.style.border = '2px solid #fd6565';
        allermessage.style.opacity = '1';

    } else if (!isValidEmail(emailValue)) {

        email.style.border = '2px solid #fd6565';
        allermessage.style.display = 'none';
        allermessagesecond.style.opacity = '1';

    } else {
        email.style.border = '2px solid #0e0e0e';
        allermessagesecond.style.opacity = '0';
    }

    const a = isValidEmail(emailValue)

    if (usernameValue !== '') {
        if (isValidEmail(emailValue)) {
            sucess.style.display ="block";
            form.style.display ="none";
        }
        
    }

};


btn.onclick = function(){
    menu__open.classList.toggle('mobile-menu-hidden');
    header__close.classList.toggle('header-hidden');
}

const g = document.querySelectorAll('.nav_mobile')

g.forEach(element =>{
    element.addEventListener('click', () => {
        menu__open.classList.toggle('mobile-menu-hidden');
    header__close.classList.toggle('header-hidden');

    })
});