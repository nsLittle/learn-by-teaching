document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-button');
  const toggleAgain = document.getElementById('toggle-again')
  const huh = document.getElementById('huh');
  const solution = document.getElementById('solution');

  toggleButton.addEventListener('click', () => {
    huh.classList.remove('hidden');
  });

  toggleAgain.addEventListener('click', () => {
    solution.classList.remove('hidden');
  });
});
