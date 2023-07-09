// ============== SHOW MENU =======================
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// MENU Section
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// MENU Hidden
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// ============== REMOVE MENU MOBILE =======================
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // when we click on new nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// ============== SWIPER PROJECTS =================
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        }
    },
    keyboard: true,
    mousewheel: true,
});

// ================ SWIPER TESTIMONIAL ========================
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ================== EMAIL JS ===============================
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project');
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Check if the filed has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // Add and Remove color
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

        // Show Message
        contactMessage.textContent = "Fill out all the input filelds 📄";
    } else {
        // serviceiD - templateID - #form - publickey
        emailjs.sendForm('service_hj5p5qy', 'template_rn99vjr', '#contact-form', 'cWS7vJiKNDqpE9shR').then(() => {
            // Show message and color
            contactMessage.classList.add('color-blue');
            contactMessage.textContent = 'Message sent ✅';

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000)
        }, (error) => {
            alert("Something went wrong! Try again later...", error);
        })

        // Remove Remaining text contents from the inputs
        contactName.value = '';
        contactEmail.value = '';
        contactProject.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);

// =============== SCROLL SECTIONS ACTIVE LINK ==============
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active__link');
        } else {
            sectionClass.classList.remove('active__link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

// ======================== Show scroll up =======================
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350vh, add the scroll-up class to the scrollUp
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// ============== DARK LIGHT THEME ==============
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose the theme
if(selectedTheme) {
    // If the validation is fullfilled, we ask that the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark icon and theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// ============== Change Background Header =============
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50vh, add scroll-header class else remove it
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

// ============== SCROLL REVEAL ANIMATION ===========
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    /*reset: true*/ /* only if you want the animation to be repeated */
});

scrollReveal.reveal('.home__data, .projects__container, .testimonial__container, .footer__container');
scrollReveal.reveal('.home__info div', {delay: 600, origin: 'bottom', interval: 100});
scrollReveal.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)', {origin: 'left'});
scrollReveal.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)', {origin: 'right'});
scrollReveal.reveal('.qualification__content, .services__card', {interval: 100});