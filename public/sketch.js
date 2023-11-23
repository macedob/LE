let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

let numAreas = 5;
let landmarks = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  background(0);

  rectMode(CENTER);

  for (let i = 0; i < numAreas; i++) {
    landmarks.push(new landmark(i * 100 + 100, 200, 80));
  }
}

function draw() {
  background(0);

  push();
  noFill();
  stroke(255);
  rect(mouseX, mouseY, 20, 20);
  pop();

  for (let i = 0; i < numAreas; i++) {
    landmarks[i].checkMouse();
    landmarks[i].display();
  }
}

class landmark {
  constructor(cx, cy, radius) {
    this.cx = cx;
    this.cy = cy;
    this.radius = radius;
    this.fillRatio = 0.2;
    this.fillQuota = 0;
  }

  display() {
    push();
    noFill();
    stroke(255);
    circle(this.cx, this.cy, this.radius);
    pop();

    push();
    fill(255);
    noStroke();
    circle(this.cx, this.cy, this.fillQuota);
    pop();
  }

  checkMouse() {
    if (dist(mouseX, mouseY, this.cx, this.cy) <= this.radius) {
      this.fillQuota += this.fillRatio;
    }
  }
}
