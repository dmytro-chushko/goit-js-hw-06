document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const {
    currentTarget,
    currentTarget: { elements: { email, password } }
  } = e;
  if (!email.value || !password.value) {
    alert('Все поля должны быть заполнены!');
  } else {
    console.log({
      'email': email.value,
      'password': password.value
    });
  }
  currentTarget.reset();
});
