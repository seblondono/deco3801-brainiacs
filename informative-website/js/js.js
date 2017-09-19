// Intro background
const intro = document.querySelector('#intro');
const images = ['url("https://deco3801-brainiacs.uqcloud.net/images/The%20Visual%20Brain.jpg")',
'url("https://deco3801-brainiacs.uqcloud.net/images/BrainSTORM.jpg")',
'url("https://deco3801-brainiacs.uqcloud.net/images/Interconnectivity%20%E2%80%93%20Dance%20of%20SNAREs%20In%20The%20Dark.jpg")'];

let random = 0;
function getRandomImage() {
    let random_new = Math.floor(Math.random() * images.length);
    if (random_new == random) {
        getRandomImage();
    } else {
        intro.style.backgroundImage = images[random_new];
        random = random_new;
    }
}

const changeImage = setInterval(getRandomImage, 60000);

// Navigation Bar
const home_navbar = document.querySelector('nav ul li:nth-child(1) a');
const image_contest_navbar = document.querySelector('nav ul li:nth-child(2) a');
const voting_system_navbar = document.querySelector('nav ul li:nth-child(3) a');
const about_navbar = document.querySelector('nav ul li:nth-child(4) a');
const contact_navbar = document.querySelector('nav ul li:nth-child(5) a');
const navigation = [home_navbar, image_contest_navbar, voting_system_navbar, about_navbar, contact_navbar];

function active(e) {
    navigation.forEach(function(item) {
        item.classList.remove('active');
    }, this);
    e.target.classList.add('active');
}

home_navbar.addEventListener('click', (e) => active(e));
image_contest_navbar.addEventListener('click', (e) => active(e));
voting_system_navbar.addEventListener('click', (e) => active(e));
about_navbar.addEventListener('click', (e) => active(e));
contact_navbar.addEventListener('click', (e) => active(e));

// Navigation Arrows
const intro_arrow = document.querySelector('.fa.fa-angle-down.fa-4x.intro');
const image_contest_arrow = document.querySelector('.fa.fa-angle-down.fa-4x.image-contest');
const voting_system_arrow = document.querySelector('.fa.fa-angle-down.fa-4x.voting-system');
const about_arrow = document.querySelector('.fa.fa-angle-down.fa-4x.about');

intro_arrow.addEventListener('click', () => {document.querySelector('#image-contest').scrollIntoView();});
image_contest_arrow.addEventListener('click', () => {document.querySelector('#voting-system').scrollIntoView();});
voting_system_arrow.addEventListener('click', () => {document.querySelector('#about').scrollIntoView();});
about_arrow.addEventListener('click', () => {document.querySelector('#contact').scrollIntoView();});

// Navigation as elements get in focus
const sections = document.querySelectorAll('section');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
  
function checkSection(e){
    sections.forEach(section => {
        // Half of the section is when transition happens
        const slideInAt = (window.scrollY + window.innerHeight) - section.clientHeight / 2;
        // Bottom of section for when scrolling from bottom to top of page
        const sectionBottom = section.offsetTop + section.clientHeight;
        const isHalfShown = slideInAt > section.offsetTop;
        const isNotScrolledPast = window.scrollY < sectionBottom;
    
        if (isHalfShown && isNotScrolledPast) {
            if (section.id == 'intro') {
                home_navbar.classList.add('active');
            } else if (section.id == 'image-contest') {
                image_contest_navbar.classList.add('active');
            } else if (section.id == 'voting-system') {
                voting_system_navbar.classList.add('active');
            } else if (section.id == 'about') {
                about_navbar.classList.add('active');
            } else if (section.id == 'contact') {
                contact_navbar.classList.add('active');
            }
        } else {
            if (section.id == 'intro') {
                home_navbar.classList.remove('active');
            } else if (section.id == 'image-contest') {
                image_contest_navbar.classList.remove('active');
            } else if (section.id == 'voting-system') {
                voting_system_navbar.classList.remove('active');
            } else if (section.id == 'about') {
                about_navbar.classList.remove('active');
            } else if (section.id == 'contact') {
                contact_navbar.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', debounce(checkSection));

//Form validation
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
        } else {
            var formData = JSON.stringify($("#CommentForm").serializeArray());
            $.ajax({
                type:"POST",
                url:"/backend/info_form_submit",
                data:{
                    'data':formData
                },
                success.function(data){
                    console.log(data.message);
                }
            });
        }
    }
}

form.addEventListener("submit", (e) => formValidation(e));


//Scroll back to top
window.addEventListener('scroll', debounce(scrollToTop));

function scrollToTop(e) {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

const toTop = document.querySelector('#back-to-top');

toTop.addEventListener('click', () => {intro.scrollIntoView();});






