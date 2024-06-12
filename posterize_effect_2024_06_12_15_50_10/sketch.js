var img;
function preload() {
img = loadImage("nature.webp"); /// preload the image to make sure that its loaded before setup
  }

function setup() {
  createCanvas(400, 400);
  background(0);// set the background to black
}

function draw() {
  background(0);
  image(img,0,0);
  var v = map(mouseX, 0, width, 0 , 70);// mark the map postion mouseX between 0 to 70 for the posterize effect
  filter(POSTERIZE, v);
}