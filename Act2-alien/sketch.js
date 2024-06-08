function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // head
  fill(255, 204, 0); // Orange
  ellipse(200, 100, 150, 150);

  //eyes
  fill(0); // Black
  ellipse(150, 85, 20, 20);
  ellipse(250, 85, 20, 20);

  // mouth
  fill(0); // Black
  arc(200, 115, 100, 20, 0, PI, CHORD);

  // body
  fill(255, 204, 0); // Orange
  rect(175, 150, 50, 150);

  // hand
  fill(255, 204, 0); // Orange
  rect(150, 200, 50, 50);
  rect(250, 200, 50, 50);

  // leg
  fill(255, 204, 0);
  rect(175, 300, 50, 50);
  rect(225, 300, 50, 50);
}