//Making a data visualization 
//simple data bar chart format 

//Data visualization about career's working hours.

let data = [
  { profession: "software engineer", hours: 48}, 
  { profession: "doctor,", hours: 50},
  { profession: "teacher", hours: 40}, 
  { profession: "UX designer",hours: 40}, 
  { profession: "nurse",hours: 50 }, 
  { profession: "chef", hours: 30},
  { profession: "construction worker", hours: 30}
]
function setup() {
  createCanvas(800, 400);
  noLoop(); // Draw once
}

function draw() {
  background("gray");
  drawBarChart(data);
}

function drawBarChart(data) {
  let barWidth = width / data.length;

  for (let i = 0; i < data.length; i++) {
    let barHeight = map(data[i].hours, 0, 60, 0, height);
    let x = i * barWidth;
    let y = height - barHeight;

    fill(random(255),random(255),random (255));
    rect(x, y, barWidth - 10, barHeight);

    // Add profession labels
    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(data[i].profession, x + (barWidth - 10) / 2, height - 10);

    // Add hours labels
    textAlign(CENTER, BOTTOM);
    text(data[i].hours, x + (barWidth - 10) / 2, y - 5);
  }
  
}