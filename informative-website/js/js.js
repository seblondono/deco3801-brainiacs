const intro_background = document.querySelector('#intro');
const form = document.querySelector("form");
const home = document.querySelector('nav ul li:nth-child(1) a');
const image_contest = document.querySelector('nav ul li:nth-child(2) a');
const voting_system = document.querySelector('nav ul li:nth-child(3) a');
const about = document.querySelector('nav ul li:nth-child(4) a');
const contact = document.querySelector('nav ul li:nth-child(5) a');
const navigation = [home, image_contest, voting_system, about, contact];
const images = ['url("https://deco3801-brainiacs.uqcloud.net/images/The%20Visual%20Brain.jpg")',
'url("https://deco3801-brainiacs.uqcloud.net/images/BrainSTORM.jpg")',
'url("https://deco3801-brainiacs.uqcloud.net/images/Interconnectivity%20%E2%80%93%20Dance%20of%20SNAREs%20In%20The%20Dark.jpg")'];


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
    const nameRegex = /^[a-zA-Z-'. ]+$/;

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
        if (!name.value || !name.value.match(nameRegex)) {
            name.style.border = error;
            name.value = '';
            name.placeholder = 'Please enter a valid name. Only letters are allowed.';
        }
        if (!lastName.value || !name.value.match(nameRegex)) {
            lastName.style.border = error;
            lastName.value = '';
            lastName.placeholder = 'Please enter a valid last name. Only letters are allowed.';
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

function active(e) {
    navigation.forEach(function(item) {
        item.classList.remove('active');
    }, this);
    e.target.classList.add('active');
}

let random = 0;
function getRandomImage() {
    let random_new = Math.floor(Math.random() * images.length);
    if (random_new == random) {
        getRandomImage();
    } else {
        intro_background.style.backgroundImage = images[random_new];
        random = random_new;
    }
}

const changeImage = setInterval(getRandomImage, 60000);

form.addEventListener("submit", (e) => formValidation(e));
home.addEventListener('click', (e) => active(e));
image_contest.addEventListener('click', (e) => active(e));
voting_system.addEventListener('click', (e) => active(e));
about.addEventListener('click', (e) => active(e));
contact.addEventListener('click', (e) => active(e));
