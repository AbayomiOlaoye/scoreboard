// eslint-disable-next-line import/no-cycle
import form from '../index.js';

const getInputs = (e) => {
  e.preventDefault();
  const scorer = document.querySelector('#name').value;
  const score = document.querySelector('#points').value;
  const list = document.querySelector('.list');
  const livescore = document.createElement('li');
  livescore.textContent = `${scorer}: ${score}`;
  list.appendChild(livescore);
  form.reset();
};

export default getInputs;