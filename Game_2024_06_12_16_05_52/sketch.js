let player;
let coins = [];
let score = 0;
let timeLeft = 30; // Game duration in seconds

function setup() {
  createCanvas(800, 600);
  player = new Player();
  for (let i = 0; i < 10; i++) {
    coins.push(new Coin());
  }
  setInterval(decreaseTime, 1000); // Decrease time every second
}

function draw() {
  background(135, 206, 250); // the canvas with light blue color
  player.update(); // update players position
  player.display(); // draw the player on canvas

  for (let coin of coins) {
    coin.display(); // draw the coin on canvas
    if (player.collectCoin(coin)) { // check how many coins the player has collected
      coin.reposition(); //reposition the collected coins
      score++; // increase in score
    }
  }

  displayScore(); // displays the score
  displayTime(); // displays the time left

  if (timeLeft <= 0) { // remaining time left
    noLoop();
    textSize(32);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Game Over! Final Score: " + score, width / 2, height / 2); // display game over msg
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 50;
    this.speed = 10;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) { // move left
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) { // move right
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW)) { // move up
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) { //move down
      this.y += this.speed;
    }
    // constrain player position to stay in the canvas boundry
    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }

  collectCoin(coin) { // enough coins collected by the player
    let d = dist(this.x + this.size / 2, this.y + this.size / 2, coin.x, coin.y);
    return d < this.size / 2 + coin.size / 2;
  }

  display() {
    fill(255, 100,50);
    rect(this.x, this.y, this.size, this.size); // draw player as rectangle
  }
}

class Coin {
  constructor() {
    this.size = 30;
    this.reposition();
  }

  reposition() {
    this.x = random(this.size, width - this.size);
    this.y = random(this.size, height - this.size);
  }

  display() {
    fill(255, 223, 0);
    ellipse(this.x, this.y, this.size); // draw the coins as ellipse
  }
}

function displayScore() {
  textSize(24);
  fill(0);
  text("Score: " + score, 10, 30); // displays current score
}

function displayTime() {
  textSize(24);
  fill(0);
  text("Time Left: " + timeLeft, 10, 60); //displays remaining time left 
}

function decreaseTime() {
  if (timeLeft > 0) {
    timeLeft--; // decrease time left by one second
  }
}
