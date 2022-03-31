let counterValue = 0;

document.querySelectorAll('[data-action]').forEach(atr => {
  atr.addEventListener('click', () => {
    atr.dataset.action === 'decrement' ? counterValue -= 1 : counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
  })
});