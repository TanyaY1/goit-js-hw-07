const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    const formElements = evt.currentTarget.elements;

    const mail = formElements.email.value.trim();   
    const passWord = formElements.password.value.trim(); 

    if (mail === "" ||  passWord === "" ) {
        alert('All form fields must be filled in');
        return;
    }
    const data = {
        email : mail,
        password: passWord ,
    };

    console.log(data);

    evt.currentTarget .reset();
}
