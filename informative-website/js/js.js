const form = document.querySelector("form");

function formValidation(e) {
    e.preventDefault();
    console.log(e);
    const name = e.target.elements[0];
    const lastName = e.target.elements[1];
    const emailAddress = e.target.elements[2];
    const textarea = e.target.elements[3];
    const noError = '';
    const error = "1px solid red";
    const emailRegex = /\b[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,4}\b/i;

    for (var i = 0; i < e.target.elements.length - 1; i++) {
        var element = e.target.elements[i];
        element.style.border = noError;
    }

    if (!name.value && !lastName.value && !emailAddress.value && !textarea.value) {
        console.log("please fill in the form before submission.");
        name.style.border = error;
        lastName.style.border = error;
        emailAddress.style.border = error;
        textarea.style.border = error;
    } else {
        if (!name.value) {
            name.style.border = error;
        }
        if (!lastName.value) {
            lastName.style.border = error;
        }
        if (!emailAddress.value || !emailAddress.value.match(emailRegex)) {
            emailAddress.style.border = error;
            emailAddress.value = '';
            emailAddress.placeholder = 'Please enter a valid email address. e.g youremail@youremailprovider.com';
        }
        if (!textarea.value) {
            textarea.style.border = error;
        }

    }

}

form.addEventListener("submit", (e) => formValidation(e));