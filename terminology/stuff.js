document.addEventListener('DOMContentLoaded', () => {

  const problem = document.querySelector('#problem');
  const word = document.querySelector('#word');
  const solution = document.querySelector('#solution');
  const wordTwo = document.querySelector('#word-two');
  const solutionTwo = document.querySelector('#solution-two');
  const wordThree = document.querySelector('#word-three');
  const solutionThree = document.querySelector('#solution-three');
  const wordFour = document.querySelector('#word-four');
  const solutionFour= document.querySelector('#solution-four');
  const wordFive = document.querySelector('#word-five');
  const solutionFive= document.querySelector('#solution-five');
  const wordSix = document.querySelector('#word-six');
  const solutionSix= document.querySelector('#solution-six');
  const wordSeven = document.querySelector('#word-seven');
  const solutionSeven= document.querySelector('#solution-seven');
  const mongo = document.querySelector('#mongo');
  const mongoose = document.querySelector('#mongoose');

  problem.addEventListener('click', () => {
    word.classList.toggle('hidden');
  });

  word.addEventListener('click', () => {
    solution.classList.toggle('hidden-two');
  });

  solution.addEventListener('click', () => {
    wordTwo.classList.toggle('hidden-three');
  });

  wordTwo.addEventListener('click', () => {
    solutionTwo.classList.toggle('hidden-four');
  });

  solutionTwo.addEventListener('click', () => {
    wordThree.classList.toggle('hidden-five');
  });

  wordThree.addEventListener('click', () => {
    solutionThree.classList.toggle('hidden-six');
  });

  solutionThree.addEventListener('click', () => {
    wordFour.classList.toggle('hidden-seven');
  });

  wordFour.addEventListener('click', () => {
    solutionFour.classList.toggle('hidden-eight');
  });

  solutionFour.addEventListener('click', () => {
    wordFive.classList.toggle('hidden-nine');
  });

  wordFive.addEventListener('click', () => {
    solutionFive.classList.toggle('hidden-ten');
  });

  solutionFive.addEventListener('click', () => {
    wordSix.classList.toggle('hidden-eleven');
  });

  wordSix.addEventListener('click', () => {
    solutionSix.classList.toggle('hidden-twelve');
  });

  solutionSix.addEventListener('click', () => {
    mongo.classList.toggle('hidden-thirteen');
  });

  mongo.addEventListener('click', () => {
    wordSeven.classList.toggle('hidden-fourteen');
  });

  wordSeven.addEventListener('click', () => {
    solutionSeven.classList.toggle('hidden-fifteen');
  });

  solutionSeven.addEventListener('click', () => {
    mongoose.classList.toggle('hidden-sixteen');
  });
});
