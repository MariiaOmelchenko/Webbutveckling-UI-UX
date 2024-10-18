const GRID_SIZE = 4;
let heroPosition = { row: 0, col: 0 };
let gold = 50; // Startvärde för guld
let experience = 0;

// Rutnätet
const grid = document.getElementById('grid');
for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}

// Uppdaterar hjälteposition
function updateHeroPosition() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.innerHTML = '');

  const heroCell = cells[heroPosition.row * GRID_SIZE + heroPosition.col];
  const hero = document.createElement('div');
  hero.classList.add('hero');
  heroCell.appendChild(hero);

  checkForEncounter();
}

// Händelse när hjälten stöter på en fiende
function checkForEncounter() {
  const encounterChance = Math.random();
  if (encounterChance < 0.3) {
    showEvent("Du möter en fiende! Vad gör du?");
  }
}

// Visar en händelse i sidofältet
function showEvent(message) {
  const eventMessage = document.getElementById('event-message');
  const actionButton = document.getElementById('action-button');

  eventMessage.textContent = message;
  actionButton.style.display = 'block';
  actionButton.onclick = handleConflict;
}

// Hanterar konflikten och tilldelar belöning eller straff
function handleConflict() {
  const success = Math.random() < 0.5;

  if (success) {
    gold += 10;
    experience += 5;
    alert("Du besegrade fienden! +10 Guld, +5 Erfarenhet");
  } else {
    gold -= 20;
    alert("Du misslyckades! -20 Guld");
    if (gold < 0) {
      alert("Du har förlorat allt guld! Spelet startar om.");
      resetGame();
      return;
    }
  }

  updateStatus();
  clearEvent();
}

// Uppdaterar statusvärden i sidofältet
function updateStatus() {
  document.getElementById('gold').textContent = gold;
  document.getElementById('experience').textContent = experience;
}

// Rensar händelse från sidofältet
function clearEvent() {
  document.getElementById('event-message').textContent = "";
  document.getElementById('action-button').style.display = 'none';
}

// Startar om spelet
function resetGame() {
  gold = 50;
  experience = 0;
  heroPosition = { row: 0, col: 0 };
  updateStatus();
  updateHeroPosition();
}

// Lyssnar på tangenttryckningar för att flytta hjälten
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

// Startar med initial position och status
resetGame();

