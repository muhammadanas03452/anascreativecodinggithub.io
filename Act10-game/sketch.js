let gameState = "start"; // start, game, win, lose
let lives = 5;
let score = 0;
let balls = [];
let planeX = 0;
let planeY = 0;
let bulletX = 0;
let bulletY = 0;
let bulletSpeed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#E60F16");
  textSize(32);
  textAlign(CENTER, CENTER);
  text("*Welcome to Fighter Game*", width / 2, height / 2 - 150);
  textSize(24);
  text("!How To Play!", width / 2, height / 2 - 100);
  text("Move your mouse to control the plane.", width / 2, height / 2 - 60);
  text("Click the mouse to shoot bullets.", width / 2, height / 2 - 30);
  text("Avoid letting hearts reach the bottom.", width / 2, height / 2);
  text("You lose a life if a heart reaches the bottom.", width / 2, height / 2 + 30);
  text("Score 15 points to win.", width / 2, height / 2 + 60);
  text("Click to Start...", width / 2, height / 2 + 120);
}

function draw() {
  if (gameState === "start") {
    // do nothing
  } else if (gameState === "game") {
    background("#124076");
    // draw plane
    fill(255);
    rect(planeX, planeY, 100, 20); // increased length of the fighter
    // draw hearts
    for (let i = 0; i < balls.length; i++) {
      fill("#FF0000"); // set color to red
      drawHeart(balls[i].x, balls[i].y, 20, 20); // increased heart size
      balls[i].y += 2;
      if (balls[i].y > height) {
        lives--;
        balls.splice(i, 1);
      }
    }
    // draw bullet
    if (bulletY > 0) {
      fill(255);
      ellipse(bulletX, bulletY, 30, 30); // increased bullet size
      bulletY -= bulletSpeed;
      if (bulletY < 0) {
        bulletY = 0;
      }
    }
    // check collision
    for (let i = 0; i < balls.length; i++) {
      if (dist(bulletX, bulletY, balls[i].x, balls[i].y) < 15) {
        balls.splice(i, 1);
        score++;
        bulletY = 0;
      }
    }
    // update lives and score
    textSize(24);
    text(`Lives: ${lives}`, 50, 20);
    text(`Score: ${score}`, 50, 40);
    // check game over
    if (lives === 0) {
      gameState = "lose";
    } else if (score === 15) {
      gameState = "win";
    }
  } else if (gameState === "win") {
    background("#265388");
    textSize(32);
    text("You Win!", width / 2, height / 2);
    text("Press Backspace to play again", width / 2, height / 2 + 50);
  } else if (gameState === "lose") {
    background("#124076");
    textSize(32);
    text("You Lose!", width / 2, height / 2);
    text("Press Backspace to play again", width / 2, height / 2 + 50);
  }
}

function drawHeart(x, y, w, h) {
  beginShape();
  vertex(x, y - h);
  bezierVertex(x, y - h / 2, x + w / 2, y, x, y + h / 2);
  bezierVertex(x, y + h, x - w / 2, y, x, y - h / 2);
  endShape();
}

function mousePressed() {
  if (gameState === "start") {
    gameState = "game";
    balls = [];
    lives = 5;
    score = 0;
  } else if (gameState === "game") {
    bulletX = planeX + 50; // adjusted bullet starting position
    bulletY = planeY;
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    gameState = "start";
  }
}

function mouseMoved() {
  if (gameState === "game") {
    planeX = mouseX;
    planeY = height - 50; // keep plane at bottom of screen
  }
}

setInterval(function() {
  if (gameState === "game") {
    balls.push({ x: random(width), y: 0 });
  }
}, 2000); // decreased ball creation frequency