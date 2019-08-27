'use strict';

const buttons = document.querySelectorAll('.order-recall');

for (const button of buttons) {
  button.addEventListener('click', showForm, false);
}

function showForm() {
  const formContainer = document.getElementById('form-container');

  formContainer.style.display = 'flex';
  
}

const formContainer2 = document.getElementById('form-container');

formContainer2.addEventListener('click', hideForm, false);

function hideForm(event) {
   if (event.target == this) {
     this.style.display = 'none';
   }
}
