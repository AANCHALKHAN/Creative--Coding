let Midnight;
let peaks;

function preload(){ // preloaded the audio file to make sure its loaded before setup
  Midnight = loadSound("Midnight.mp3");
}



function setup() {
  createCanvas(400, 400);
  peaks = Midnight.getPeaks(width); // peaks of the audio file for the width of the canvas
 Midnight.play(); // play the audio file
  console.log(peaks);
}

function draw() {
  background(220);
  let t = map(Midnight.currentTime(), 0, Midnight.duration(), 0, width)
  
  stroke(255, 0 ,0);
  line(t,0,t, height);
  //draw the wave form based on the peak array
  stroke(0); // stoke color for black
  for(let i = 0; i < peaks.length; i++){
    line(i, height/2 + peaks[i]*100, i, height/2 -  peaks[i]*100);// drawing vertical lines for the amplidute of each point
  }
}