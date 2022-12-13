const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue == "") {
        setErrorfor(username, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(username);
    }

    if(emailValue == "") {
        setErrorfor(email, "O email é obrigatório")
    } else if(!checkEmail(emailValue)) {
        setErrorfor(email, "Email inválido");
    } else {
        setSuccessFor(email);
    }

    if(passwordValue == "") {
        setErrorfor(password, "A senha é obrigatório");
    } else if (passwordValue.length < 7) {
        setErrorfor(password, "A senha precisa de no mínimo 7 cartacteres");
    } else {
        setSuccessFor(password);
    }

    if(passwordConfirmation == "") {
        setErrorfor(passwordConfirmation, "A confirmação de senha é obrigatória");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorfor(passwordConfirmation, "As senhas não conferem");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControlIs = form.querySelectorAll(".form-control")

    const formIsValid = [...formControlIs].every(formControl => {
        return (formControl.className === "form-control success");
    });

    if (formIsValid) {
        console.log ("O formulário ta certo")
    }
}

function setErrorfor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //add msg de erro
    small.innerText = message;

    //classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor (input) {
    const formControl = input.parentElement;

    //add classe de sucesso
    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email);
    }