function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector('.change-color').addEventListener('click', () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  document.querySelector('.color').textContent = `${getRandomHexColor()}`;
});