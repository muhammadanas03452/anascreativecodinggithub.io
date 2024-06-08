let textVisible = false;
let patternOnText = false;
let pattern = [];
let shrinkPattern = false; // Add a new variable to control the shrinking effect

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(64);
  noStroke();

  // Initialize pattern elements
  for (let i = 0; i < 100; i++) {
    pattern.push(new PatternElement(random(width), random(height)));
  }
}

function draw() {
  background(0);

  // Draw the moving and expanding/shrinking pattern
  drawPattern();

  if (textVisible) {
    // Draw the text with or without pattern
    if (patternOnText) {
      drawPatternOnText();
    } else {
      drawText();
    }
  }
}

function drawPattern() {
  for (let i = 0; i < pattern.length; i++) {
    pattern[i].move();
    pattern[i].display();
  }
}

function drawText() {
  stroke(0);
  strokeWeight(4);
  fill('#008DDA');
  text("Bath Spa University", width / 2, height / 2);
  textFont('serif',80);
}

function drawPatternOnText() {
  // Create a graphics buffer
  let pg = createGraphics(width, height);
  pg.textAlign(CENTER, CENTER);
  pg.textSize(64);
  pg.noStroke();
  pg.fill(255);
  pg.text("Bath Spa University", width / 2, height / 2);
  let mask = pg.get();

  // Apply the mask
  drawingContext.globalCompositeOperation = 'source-in';
  drawPattern();
  drawingContext.globalCompositeOperation = 'source-over';
}

function mousePressed() {
  if (!textVisible) {
    textVisible = true;
  } else {
    patternOnText = !patternOnText;
    for (let i = 0; i < pattern.length; i++) {
      pattern[i].shrink(); // Call the shrink method for each pattern element
    }
    shrinkPattern = true; // Set the shrinkPattern flag to true when the screen is clicked
  }
}

class PatternElement {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 50);
    this.speed = random(0.5, 2);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    if (shrinkPattern) {
      this.size -= 0.5; // Shrinking effect
      if (this.size < 10) {
        shrinkPattern = false; // Reset the shrinkPattern flag when the size is small enough
      }
    } else {
      this.size += 0.1; // Expanding effect
    }

    // Wrap around the edges
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }

  display() {
    fill(random(255), random(255), random(255), 150);
    ellipse(this.x, this.y, this.size);
  }

  shrink() {
    this.size -= 10; // Fast shrinking effect
    if (this.size < 10) {
      this.size = 10; // Reset the size to a minimum value
    }
  }
}