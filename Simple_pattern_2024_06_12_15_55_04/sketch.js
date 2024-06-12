function setup() {
  createCanvas(500,500);
  fill(0); // set the fill color to black
  strokeWeight(3);// set the stroke wait for shape
  rectMode(CENTER);
  let space = 50;
  for (x=0;x<width+50;x+=space){
    for (y=0;y<height-50;y+=space){
      fill(random(255),random(255),random(255)); //random colors for the squares
      // line(x,y,x+space,y);
      // line(x,y,x,y+space);
      square(x,y,10)
      square(x+space/2,y+space/2,10) // drawinf 2nd square off set of the half space
      
    }
  }
}