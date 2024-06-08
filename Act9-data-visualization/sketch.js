let screenTime = [];
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color("#557153")); // Changed background color
  noStroke();
  textSize(24);
  textAlign(CENTER, TOP);

  for (let i = 0; i < 7; i++) {
    if (i < 5) { // Monday to Friday
      screenTime.push(random(3, 6));
    } else { // Saturday and Sunday
      screenTime.push(random(8, 12));
    }
  }

  for (let i = 0; i < 7; i++) {
    if (screenTime[i] < 4) {
      colors.push(color(255, 0, 0)); // Red for low screen time
    } else if (screenTime[i] < 6) {
      colors.push(color(255, 165, 0)); // Orange for medium screen time
    } else {
      colors.push(color(0, 255, 0)); // Green for high screen time
    }
  }
}

function draw() {
  background(color("#557153")); // Changed background color

  // Draw heading
  fill(0);
  text("Weekly Mobile Screen Time", width / 2, 50); // Moved the heading upward
  textFont('serif');

  // Draw bars
  let barWidth = width / 8;
  let barSpacing = 10;
  let maxValue = max(screenTime);
  let yAxisHeight = height - 100;
  let yAxisWidth = 50;

  for (let i = 0; i < 7; i++) {
    let x = i * (barWidth + barSpacing) + barSpacing;
    let y = height - (screenTime[i] / maxValue) * yAxisHeight;
    let barHeight = height - y;

    fill(colors[i]);
    rect(x, y, barWidth, barHeight);

    // Draw day labels
    fill(0);
    text(days[i], x + barWidth / 2, height - 30); // Moved the day labels upward

    // Draw hour labels
    fill(0);
    text(screenTime[i].toFixed(1) + " hours", x + barWidth / 2, y - 10);
  }

  // Draw y-axis
  fill(0);
  rect(10, height - yAxisHeight, yAxisWidth, yAxisHeight);
  for (let i = 0; i <= maxValue; i++) {
    let y = height - (i / maxValue) * yAxisHeight;
    text(i, 20, y);
  }
}

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];