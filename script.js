<script>
const cells = document.querySelectorAll('td');
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        alert(currentPlayer + " wins!");
        resetGame();
      } else if (isBoardFull()) {
        alert("It's a draw!");
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
      }
    }
  });
});

function checkWin() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]          // Diagonals
  ];

  return winCombinations.some(combination => {
    return combination.every(index => cells[index].textContent === currentPlayer);
  });
}

function isBoardFull() {
  return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}
</script>

