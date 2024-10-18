// Antal kolumner och rader
const GRID_SIZE = 4;
let heroPosition = { row: 0, col: 0 };

// Skapar rutnätet
const grid = document.getElementById('grid');
for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}

// Funktion för att uppdatera hjältepositionen
function updateHeroPosition() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.innerHTML = ''); // Rensa alla rutor

  const heroCell = cells[heroPosition.row * GRID_SIZE + heroPosition.col];
  const hero = document.createElement('div');
  hero.classList.add('hero');
  heroCell.appendChild(hero);
}

// Initial position
updateHeroPosition();

// Lyssnar på tangenttryckningar
window.addEventListener('keydown', event => {
  const { row, col } = heroPosition;

  switch (event.key) {
    case 'ArrowUp':
      if (row > 0) heroPosition.row--;
      break;
    case 'ArrowDown':
      if (row < GRID_SIZE - 1) heroPosition.row++;
      break;
    case 'ArrowLeft':
      if (col > 0) heroPosition.col--;
      break;
    case 'ArrowRight':
      if (col < GRID_SIZE - 1) heroPosition.col++;
      break;
  }
  updateHeroPosition();
});
