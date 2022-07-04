import './index.html';

const button = document.querySelector('#my-button');
const result = document.querySelector('#my-result');

button.addEventListener('click', () => {
  result.textContent = 42;
});


function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
};