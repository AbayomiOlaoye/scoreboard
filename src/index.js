import './style.scss';
// eslint-disable-next-line import/no-cycle
import getInputs from './modules/add_score.js';
import getScores from './modules/getScores.js';
import displayUI from './modules/render_scores.js';

const form = document.querySelector('.form');

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', getInputs);

  document.querySelector('#refresh').addEventListener('click', () => {
    document.querySelector('tbody').innerHTML = '';
    getScores()
      .then((res) => res.json())
      .then((data) => displayUI(data.result));
  });
});

export default form;