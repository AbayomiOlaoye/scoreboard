// eslint-disable-next-line import/no-cycle
import form from '../index.js';
import sendData from './postScore.js';

const getInputs = (e) => {
  e.preventDefault();
  const scorer = document.querySelector('#name').value;
  const score = document.querySelector('#points').value;
  const info = {
    user: scorer,
    score,
  };

  sendData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ScoreBoard_Microverse/scores/', info);
  form.reset();
};

export default getInputs;