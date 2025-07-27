const resultDisplay = document.getElementById('result');
const spinButton = document.getElementById('spinButton');

function getRandomResult() {
  const outcomes = ['Red 🔴', 'Black ⚫️', 'Green 🟢'];
  const index = Math.floor(Math.random() * outcomes.length);
  return outcomes[index];
}

spinButton.addEventListener('click', () => {
  resultDisplay.textContent = 'Spinning... 🎲';
  setTimeout(() => {
    const result = getRandomResult();
    resultDisplay.textContent = `Result: ${result}`;
  }, 1500);
});
