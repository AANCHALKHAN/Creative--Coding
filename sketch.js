function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(2300);
  
  //Draw the body of the car 
  fill("#D7FCFF" )
  rect(50,200,250,50);
  rect(100,150,140,50);
  
  //Wheals
  fill("#08070B")
  ellipse(90,250,40,40);
  ellipse(260,250,40,40);
  
  //Windows
  fill("#620BF9")
  rect(130,165,20,20);
    rect(190,165,20,20);
 //headlights
  fill("#E9F90B")
  ellipse(50,210,5,20);
  fill(255,0,0);
  ellipse(300,210,5,20);
  
  
  
  
  
  
  
  
  
  
  
  
}