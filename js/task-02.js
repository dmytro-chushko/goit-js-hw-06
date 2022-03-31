const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.querySelector('#ingredients').append(...ingredients.map(ingredient => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = ingredient;
  return newEl;
}));
