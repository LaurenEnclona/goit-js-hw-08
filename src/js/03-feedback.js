import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const throttledSaveToStorage = _.throttle(formData => {
  localStorage.setItem(storageKey, JSON.stringify(formData));
}, 500);

form.addEventListener('input', event => {
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;
  const formData = { email, message };

  throttledSaveToStorage(formData);
});
