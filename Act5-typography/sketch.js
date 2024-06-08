function setup() {
    createCanvas(400, 400);
    background(255);
    drawPattern();
    drawText();
  }
  
  function drawPattern() {
    let PatternWidth = 20;
    let PatternHeight = 10;
    let PatternColor = color("#C95D55");
    
    for (let x = 0; x < width; x += PatternWidth * 2) {
      for (let y = 0; y < height; y += PatternHeight * 2) {
        fill(PatternColor);
        noStroke();
        beginShape();
        vertex(x, y);
        vertex(x + PatternWidth, y + PatternHeight);
        vertex(x + PatternWidth * 2, y);
        vertex(x + PatternWidth, y - PatternHeight);
        endShape(CLOSE);
      }
    }
  }
  
  function drawText() {
    let textColor = color("#623B68");
    let textBackgroundColor = color("#AFD8E8");
    let fontSize = 32;
    let fontFamily = "serif";
    
    fill(textBackgroundColor);
    noStroke();
    rect(14, 150, 375, 50,7);
    
    fill(textColor);
    textSize(fontSize);
    textFont('Courier New');
    textStyle(BOLD);
    text(50, 65);
    textAlign(CENTER, CENTER);
    text("Bath Spa University", 200, 175);
  }
  
  function draw() {
  }