function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = this.getAttribute('href');
        const duration = 1000;

        smoothScroll(target, duration);
    });
});

function displayCurrentYear() {
    const year = new Date().getFullYear();
    document.querySelector('footer p').textContent += ` ${year}`;
}

displayCurrentYear();
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // Simple validation for name (non-empty)
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simple validation for comments (non-empty)
    if (comments === '') {
        alert('Please enter your comments.');
        return;
    }

    // If all validations pass, proceed to handle form submission
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Comments: ${comments}`);

    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comments').value = '';

    // Optionally, you can send data to a server or perform other actions
}


// Add event listener for form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleFormSubmit);
function toggleContactForm() {
    const contactForm = document.getElementById('contact-form');
    contactForm.style.display = (contactForm.style.display === 'block') ? 'none' : 'block';
}

const toggleFormButton = document.getElementById('toggleFormButton');
toggleFormButton.addEventListener('click', toggleContactForm);
