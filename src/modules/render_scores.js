const displayUI = (result) => {
  const list = document.querySelector('.list');
  result.forEach((player) => {
    const livescore = document.createElement('li');
    livescore.textContent = `${player.user}: ${player.score}`;
    list.appendChild(livescore);
  });
};

export default displayUI;