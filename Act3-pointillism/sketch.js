var img, x, y;

function preload() {

img = loadImage("https://geographical.co.uk/wp-content/uploads/Saharasunset-2.jpg");

}



function setup() {

createCanvas (400, 400);

background(0);

noStroke();

}



function draw() {

x = random(width);

y = random(height);

var c = img.get(x, y);

fill(c);
//triangle
  let Size =100;
  let halfSize =Size/100;
beginShape();
   vertex(x, y - halfSize); 
  vertex(x - halfSize, y + halfSize); 
  vertex(x + halfSize, y + halfSize); 
  endShape(CLOSE);

}