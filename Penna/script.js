const canvas = document.getElementById('teckning');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color');
const clearButton = document.getElementById('clear-canvas');

let isDrawing = false;
let penColor = colorPicker.value;

// Uppdatera pennans färg
colorPicker.addEventListener('input', (e) => {
  penColor = e.target.value;
});

// Starta ritningen
canvas.addEventListener('mousedown', () => {
  isDrawing = true;
  ctx.beginPath();
});

// Rita när musen dras
canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = 2;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

// Stoppa ritningen
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.closePath();
});

// Rensa canvasen
clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
