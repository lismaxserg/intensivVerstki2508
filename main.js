'use strict';

const buttons = document.querySelectorAll('.order-recall');

for (const button of buttons) {
  button.addEventListener('click', showForm, false);
}

function showForm() {
  const formContainer = document.getElementById('form-container');

  formContainer.style.display = 'flex';

  formContainer.addEventListener('click', hideForm, false);

  function hideForm(event) {
    if (event.toElement == this) {
      this.style.display = 'none';
    }
  }
}
