document.querySelector('#validation-input').addEventListener('blur', function () {
  if (Number(this.dataset.length) === this.value.length) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
  };
});

    