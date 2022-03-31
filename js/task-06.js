document.querySelector('#validation-input').addEventListener('blur', function () {
  Number(this.dataset.length) >= this.value.length ? this.classList.add('valid') : this.classList.add('invalid');
});