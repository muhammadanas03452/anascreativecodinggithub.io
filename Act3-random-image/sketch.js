function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  for (let i = 0; i < random(3, 5); i++) {
     let x = random(width); 
    let y = random(height); 
    let diameter = random(10, 100);
    
     let grey = random(255); 
    
    fill(grey); 
    ellipse(x, y, diameter, diameter); 
  }
}
