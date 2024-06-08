let teddyBears = [];
var mySound;

function preload() {
  mySound = loadSound('audio.mp3')
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setVolume(0.5);
  mySound.play();
  mySound.loop();
}

function draw() {
  background("#028391");
  for (let i = 0; i < teddyBears.length; i++) {
    teddyBears[i].display();
  }
  drawTeddyBear(mouseX, mouseY);
}

function drawTeddyBear(x, y) {
  let teddyBear = new TeddyBear(x, y);
  teddyBears.push(teddyBear);
}

class TeddyBear {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    // Head
    fill("#F6DCAC");
    ellipse(this.x, this.y, 20, 20);

    // Body
    rect(this.x - 10, this.y + 10, 20, 20);

    // Left arm
    rect(this.x - 15, this.y + 15, 10, 10);

    // Right arm
    rect(this.x + 5, this.y + 15, 10, 10);

    // Left ear
    triangle(this.x - 10, this.y + 5, this.x - 5, this.y + 10, this.x - 10, this.y + 15);

    // Right ear
    triangle(this.x + 10, this.y + 5, this.x + 5, this.y + 10, this.x + 10, this.y + 15);

    // Left eye
    ellipse(this.x - 5, this.y - 5, 5, 5);

    // Right eye
    ellipse(this.x + 5, this.y - 5, 5, 5);
  }
}