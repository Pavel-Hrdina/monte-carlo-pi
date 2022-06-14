// Global variables
// DOM
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const dotCountEl = document.getElementById("dotCount");
const piEl = document.getElementById("pi");
const differenceEl = document.getElementById("difference");
// Numbers and value
const speed = 1000;
const dotColor = "white";
const shapeColor = "red";
const backgroundColor = "black";
const allDots = [];
const dotRadius = 2;
const circleRadius = canvas.width / 2;
let dotCountInCircle = 0;

// Draw a rectangle, function takes input of width (x) height (y) and color
const drawRectangle = (x, y, width, height, color) => {
  ctx.strokeStyle = color;
  ctx.rect(x, y, width, height);
  ctx.stroke();
};

// A function that fills the rectangle with color
const fillRectangle = (x, y, width, height) => {
  ctx.fillStyle = color;
  ctx.fullRectangle(x, y, width, height);
};

// Function that draws a circle
const drawCircle = (x, y, radius, color) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 10;
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.stroke();
};

// Fills circle with color
const fillCircle = (x, y, radius, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
};

// Loop of drawing circles
const gameLoop = () => {
  setInterval(drawAndUpdate, 1000 / speed);
};

//  creates a new dot
const createNewDot = () => {
  // Set up x and y coordinates
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  // Push x and y coordinates to allDots array
  allDots.push({ x: x, y: y });
  // Calculate distance to center from x and y coordinates
  const xDistanceToCenter = Math.abs(canvas.width / 2 - x);
  const yDistanceToCenter = Math.abs(canvas.height / 2 - y);
  // Calculate general distance
  const distance = Math.sqrt(
    xDistanceToCenter * xDistanceToCenter +
      yDistanceToCenter * yDistanceToCenter
  );
  // Check if distance is smaller than half of canvas width, if so add dots to circle
  if (distance < canvas.width / 2) dotCountInCircle++;
  // Fill circle with color
  fillCircle(x, y, dotRadius, dotColor);
};

// Calculate pi
const makeEstimationToPI = () => {
  const pi = (dotCountInCircle * 4) / allDots.length;
  // Change elements inner html to text
  dotCountEl.innerText = "Počet teček: " + allDots.length;
  piEl.innerText = "Přibližné PI: " + pi;
  differenceEl.innerText =
    "Rozdíl od opravdového PI: " + Math.abs(Math.PI - pi);
};

// Update of draw
const drawAndUpdate = () => {
  // Calls all functions
  createNewDot();
  makeEstimationToPI();
  drawCircle(canvas.width / 2, canvas.height / 2, circleRadius, shapeColor);
  drawRectangle(0, 0, canvas.width, canvas.height, shapeColor);
};

gameLoop();
