const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let scale = 30;
  const boxesList = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${scale}px`;
    box.style.height = `${scale}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.classList.add('item');
    boxesList.push(box);
    scale += 10;
  }
  boxes.append(...boxesList);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}

btnCreate.addEventListener('click', () => createBoxes(Number(input.value)));
btnDestroy.addEventListener('click', destroyBoxes);
