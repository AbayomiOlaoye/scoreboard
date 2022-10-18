import './style.scss';
// eslint-disable-next-line import/no-cycle
import getInputs from './modules/add_score.js';

const form = document.querySelector('.form');

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', getInputs);
  form.reset();
});

export default form;
