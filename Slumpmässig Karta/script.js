const mapContainer = document.getElementById('map-container');
const goldElement = document.getElementById('gold');
const experienceElement = document.getElementById('experience');

// Konfigurerar kartans rutor
const cellsData = [
  { x: 50, y: 50, background: 'url("forest.avif")' },
  { x: 300, y: 100, background: 'url("mountain.avif")' },
  { x: 600, y: 200, background: 'url("river.avif")' },
  { x: 900, y: 150, background: 'url("village.avif")' }
];

let gold = 50;
let experience = 0;

// Skapar kartans rutor
cellsData.forEach(cellData => {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.style.left = `${cellData.x}px`;
  cell.style.top = `${cellData.y}px`;
  cell.style.backgroundImage = cellData.background;
  mapContainer.appendChild(cell);
});

// Skapar token (hjälten)
const token = document.createElement('div');
token.classList.add('token');
mapContainer.appendChild(token);

// Tokenens position
let tokenPosition = { x: 50, y: 50 };

// Uppdaterar tokenens position på skärmen
function updateTokenPosition() {
  token.style.left = `${tokenPosition.x}px`;
  token.style.top = `${tokenPosition.y}px`;
}

// Hanterar tokenens rörelse med piltangenterna
window.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      if (tokenPosition.y > 0) tokenPosition.y -= 50;
      break;
    case 'ArrowDown':
      if (tokenPosition.y < mapContainer.clientHeight - 100) tokenPosition.y += 50;
      break;
    case 'ArrowLeft':
      if (tokenPosition.x > 0) tokenPosition.x -= 50;
      break;
    case 'ArrowRight':
      if (tokenPosition.x < mapContainer.clientWidth - 100) tokenPosition.x += 50;
      break;
  }
  updateTokenPosition();
  checkForEncounter();
});

// Händelsehantering vid möten
function checkForEncounter() {
  const encounterChance = Math.random();
  if (encounterChance < 0.2) {
    handleConflict();
  }
}

// Hanterar konflikt och belöning
function handleConflict() {
  const success = Math.random() < 0.5;
  if (success) {
    gold += 10;
    experience += 5;
    alert('Du vann konflikten! +10 Guld, +5 Erfarenhet');
  } else {
    gold -= 20;
    alert('Du förlorade! -20 Guld');
    if (gold < 0) resetGame();
  }
  updateStatus();
}

// Uppdaterar status i sidofältet
function updateStatus() {
  goldElement.textContent = gold;
  experienceElement.textContent = experience;
}

// Återställer spelet
function resetGame() {
  alert('Spelet startar om!');
  gold = 50;
  experience = 0;
  tokenPosition = { x: 50, y: 50 };
  updateStatus();
  updateTokenPosition();
}

// Initierar spelet
updateTokenPosition();
