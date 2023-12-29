import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const throttledSave = _.throttle(() => {
  const formData = {
    email: form.querySelector('input[name="email"]').value,
    message: form.querySelector('textarea[name="message"]').value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

form.addEventListener('input', throttledSave);

// Add this code within the script
const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedFormData) {
  form.querySelector('input[name="email"]').value = storedFormData.email;
  form.querySelector('textarea[name="message"]').value = storedFormData.message;
}

// Add this code within the script
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
