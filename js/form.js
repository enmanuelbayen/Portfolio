const form = document.getElementById('contactForm');
const email = document.getElementById('email-contact');
const emailError = document.querySelector('.email-error-msg');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    emailError.textContent = 'Email need to be on lowercase';
    emailError.style.display = 'block';
    event.preventDefault();
  }
});