let gridmeasure;
let colors;

function setup() {
  createCanvas(400, 400);
  background(255);
  gridmeasure = 20;
  colors = [
    color(random(255), random(255), random(255)),
    color(random(255), random(255), random(255))
  ];
  drawpattern();
}

function drawpattern() {
  for (let x = 0; x < width; x += gridmeasure) {
    for (let y = 0; y < height; y += gridmeasure) {
      let colorIndex = (x / gridmeasure + y / gridmeasure) % 2;
      fill(colors[colorIndex]);
      rect(x, y, gridmeasure, gridmeasure);
    }
  }
}

function draw() {
  
}