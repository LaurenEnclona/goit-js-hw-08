import throttle from 'lodash.throttle'; // Correct import statement

const form = document.querySelector('.feedback-form');
const throttledSave = throttle(() => {
  const formData = {
    email: form.querySelector('input[name="email"]').value,
    message: form.querySelector('textarea[name="message"]').value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

form.addEventListener('input', throttledSave);

// Load data from local storage on page load
const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedFormData) {
  form.querySelector('input[name="email"]').value = storedFormData.email;
  form.querySelector('textarea[name="message"]').value = storedFormData.message;
}

// Clear storage and display data on form submission
form.addEventListener('submit', event => {
  event.preventDefault(); // Prevent default form submission
  const formData = {
    email: form.querySelector('input[name="email"]').value,
    message: form.querySelector('textarea[name="message"]').value,
  };
  console.log(formData); // Display data in console
  localStorage.removeItem('feedback-form-state');
  form.reset(); // Clear form fields
});
