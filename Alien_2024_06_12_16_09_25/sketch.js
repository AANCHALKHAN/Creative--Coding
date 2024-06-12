function setup() {
  createCanvas(700, 800);
  noLoop();
}

function draw() {
  background("pink");
  drawAlien(width / 2, height / 2);
}

function drawAlien(x, y) {
  // Draw the head
  fill(" green");
  ellipse(x, y, 200, 250);
  
  // Draw the eyes
  fill(255);
  ellipse(x - 50, y - 50, 50, 70);
  ellipse(x + 50, y - 50, 50, 70);
  
  // Draw the pupils
  fill(0);
  ellipse(x - 50, y - 50, 20, 30);
  ellipse(x + 50, y - 50, 20, 30);
  
  // Draw the antennae
  stroke(100, 255, 100);
  strokeWeight(10);
  line(x - 60, y - 130, x - 100, y - 200);
  line(x + 60, y - 130, x + 100, y - 200);
  
  // Draw the antennae tips
  noStroke();
  fill("blue");
  ellipse(x - 100, y - 200, 20, 20);
  ellipse(x + 100, y - 200, 20, 20);
  
  // Draw the mouth
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(x, y + 50, 100, 50, 0, PI);
  
  // Draw the body
  fill("green");
  noStroke();
  rect(x - 75, y + 125, 150, 200, 20);
  
  // Draw the arms
  stroke(3);
  fill("green");
  ellipse(x - 110, y + 230, 70, 120);
  ellipse(x + 110, y + 230, 70, 120);
  
  // Draw the legs
  ellipse(x - 50, y + 325, 30, 100);
  ellipse(x + 50, y + 325, 30, 100);
}
