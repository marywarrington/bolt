// TODO: limit to a .js class
const inputs = document.querySelectorAll('.c-bolt-input');
inputs.forEach(input => {

  // Check if the field has pre-filled text from the server side
  if (input.value) {
    input.classList.add('is-filled');
  }

  input.onfocus = function() {
    input.classList.remove('is-touched');

    // In there were server-side errors, the 'is-invalid' class will be present
    // but should be removed on focus because the user is trying to fix them.
    input.classList.remove('is-invalid');

    if (input.errors) {
      input.errors.remove();
    }
  };

  input.onblur = function() {
    input.classList.add('is-touched');
    if (input.value) {
      input.classList.add('is-filled');
    } else {
      input.classList.remove('is-filled');
    }

    if (input.validationMessage) {
      let error = document.createElement('div');
      let messageText = document.createTextNode(input.validationMessage);
      error.classList.add('c-bolt-input-message');
      error.classList.add('c-bolt-input-message--invalid');
      error.appendChild(messageText);

      input.errors = input.insertAdjacentElement('afterend', error);
    }
  };
});

const customInputWrappers = document.querySelectorAll('.c-bolt-custom-input');
customInputWrappers.forEach(wrapper => {
  const input = wrapper.querySelector('.c-bolt-input');

  input.onfocus = function() {
    wrapper.classList.add('is-active');
  };

  input.onblur = function() {
    wrapper.classList.remove('is-active');
  };
});