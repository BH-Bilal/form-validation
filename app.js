// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener('click', () => {
//     container.classList.add("sign-up-mode");
// });
// sign_in_btn.addEventListener('click', () => {
//     container.classList.remove("sign-up-mode");
// });
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");



form.addEventListener("submit", e => {
    e.preventDefault();
    validateinputs();

});
const setError = (element, message) => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');

}
const setSuccess = element => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');


};


const validateinputs = () => {
    const usernamevalue = username.value.trim();
    const username1value = username1.value.trim();
    const passwordvalue = password.value.trim();
    const password1value = password1.value.trim();
    const password2value = password2.value.trim();
    const emailValue = email.value.trim();

    if (usernamevalue === '') {

        setError(username, 'Username Required.');
    } else {
        setSuccess(username);
    }

    if (passwordvalue === '') {
        setError(password, 'Password Required.');
    } else if (passwordvalue.length < 8) {
        setError(password, 'Password must be at least 8 Character.')
    } else {
        setSuccess(password);
    }

};
const form1 = document.getElementById("form1")
const email = document.getElementById("email");
const username1 = document.getElementById("username1");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form1.addEventListener("submit", e => {
    e.preventDefault();
    validateinput();

});
const setError1 = (element, message) => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');

}
const setSuccess1 = element => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const validateinput = () => {
    // const usernamevalue = username.value.trim();
    const username1value = username1.value.trim();
    // const passwordvalue = password.value.trim();
    const password1value = password1.value.trim();
    const password2value = password2.value.trim();
    const emailvalue = email.value.trim();

    if (username1value === '') {

        setError1(username1, 'Username Required.');
    } else {
        setSuccess1(username1);
    }
    if (emailvalue === '') {
        setError1(email, "Email is Required");

    } else if (!isValidEmail(emailvalue)) {
        setError1(email, 'Provide a Valid Email Address')

    } else {
        setSuccess1(email);
    }
    if (password1value === '') {
        setError1(password1, 'Enter The Password.');
    } else if (password1value.length < 8) {
        setError1(password1, 'Password must be at least 8 Character.')
    } else {
        setSuccess1(password1);
    }
    if (password2value === '') {
        setError1(password2, 'Please Confirm Your Password.');
    } else if (password2value !== password1value) {
        setError1(password2, "Password Doesn't match.")
    } else {
        setSuccess1(password2);
    }

};