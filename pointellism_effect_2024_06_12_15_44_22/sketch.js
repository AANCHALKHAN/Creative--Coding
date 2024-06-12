var img, x,y ;//declaring the variables
function preload()
{
img = loadImage("cat.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  
  
  x = random(width); // randomly place a dot in x position
  y = random(height); // randomly place a dot in y position
 var c = img.get(x,y); // getting the position ofthe mouse
  fill(c[0], c[1], c[2], 100); //the color depends on the dots , 50 transparency value
  triangle(x, y - 30,x - 30,y + 30,x + 30, y  + 30);
}
