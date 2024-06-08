function setup() {
    createCanvas(400, 200);
  }
  
  function draw() {
    background('#4ACC63');
    
    //mirror
    square(83,82,35)
    
    //headlight
    fill(255, 204, 0)
    noStroke()
    circle(150, 120, 20);
    
    //car body
    fill(255, 0, 0);
    rect(40, 100, 110, 40);
    
    //wheels
    fill(0);
    ellipse(75, 140, 20, 20);
    ellipse(125, 140, 20, 20);
  }
  