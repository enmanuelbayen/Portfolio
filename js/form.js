const form = document.getElementById('contactForm');
const email = document.getElementById('email-contact');
const emailError = document.querySelector('.email-error-msg');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    emailError.textContent = 'Need to be on lower case';

    event.preventDefault();
  }
});