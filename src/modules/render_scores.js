const displayUI = (result) => {
  const table = document.querySelector('tbody');
  result.forEach((player) => {
    table.innerHTML += `
      <tr>
        <td>${player.user}</td>
        <td>${player.score}</td>
      </tr>
    `;
  });
};

export default displayUI;