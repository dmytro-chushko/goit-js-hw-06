document.querySelector('#name-input').addEventListener('input', function() {
  document.querySelector('#name-output').textContent = !this.value ? 'Anonymous' : this.value;
});