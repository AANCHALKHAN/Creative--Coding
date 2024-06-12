var d = 50
function setup() {
  createCanvas(600, 400);
  background(0); // background color will be black
  noStroke();
  
}

function draw() {
  fill(0, 10); 
  rect(0,0,width,height); // width and height of the canvas
  let r = map (mouseX,0,width,0, 0);// multiple color changes as we move the mouse
  let g = map (mouseY,0 , height, 0,255);
  let b = 200;
  fill(r,g,b ,100);
  let size = d + sin(frameCount * 0.5)*20; // speed of the mouse trail
ellipse(mouseX,mouseY,size,size)  // shape of the trail
}