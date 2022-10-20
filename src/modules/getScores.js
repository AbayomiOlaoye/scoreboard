const getScores = async () => {
  const scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ScoreBoard_Microverse/scores/');
  return scores;
};

export default getScores;