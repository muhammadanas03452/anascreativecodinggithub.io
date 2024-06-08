let img, x, y;

function preload() {
  img = loadImage("https://geographical.co.uk/wp-content/uploads/Saharasunset-2.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  background(0);
  x = mouseX;
  y = mouseY;
  image(img, 0, 0);
  let c = get(x, y);
  fill(c);

  // triangle
  let size = 100;
  let halfSize = size / 2;
  beginShape();
  vertex(x, y - halfSize); 
  vertex(x - halfSize, y + halfSize); 
  vertex(x + halfSize, y + halfSize); 
  endShape(CLOSE);
}
