let shapes = [];

let waveCenterX = 150;
let waveCenterY = 400;
const waveSpeed = 0.7;
const arcSpacing = 150;
const numArcs = 20;
const maxWaveRadius = numArcs * arcSpacing;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);

  waveCenter = createVector(150, 400);

  shapes.push({ type: 'circle', x: 150, y: 120, size: 100, color: color(48, 100, 100), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'circle', x: 450, y: 280, size: 120, color: color(215, 65, 78), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'circle', x: 500, y: 80, size: 70, color: color(0, 70, 78), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'square', x: 250, y: 200, size: 40, color: color(0, 0, 0), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'square', x: 300, y: 250, size: 60, color: color(0, 0, 0), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'triangle', x1: 100, y1: 300, x2: 180, y2: 300, x3: 140, y3: 220, color: color(0, 0, 10), scale: 1, isHit: false, hitFrame: 0, cx: 140, cy: 273 });
  shapes.push({ type: 'triangle', x1: 400, y1: 70, x2: 450, y2: 30, x3: 480, y3: 90, color: color(195, 33, 78), scale: 1, isHit: false, hitFrame: 0, cx: 443, cy: 63 });
  shapes.push({ type: 'rect', x: 200, y: 80, w: 60, h: 100, color: color(340, 80, 100), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'rect', x: 230, y: 100, w: 60, h: 100, color: color(180, 100, 70), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'quad', x1: 100, y1: 50, x2: 130, y2: 70, x3: 120, y3: 100, x4: 90, y4: 80, color: color(285, 60, 78), scale: 1, isHit: false, hitFrame: 0, cx: 110, cy: 75 });
  shapes.push({ type: 'circle', x: 360, y: 120, size: 15, color: color(0, 0, 0), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'circle', x: 420, y: 160, size: 10, color: color(0, 0, 0), scale: 1, isHit: false, hitFrame: 0 });
  shapes.push({ type: 'circle', x: 470, y: 200, size: 25, color: color(0, 0, 100), scale: 1, isHit: false, hitFrame: 0 });

  for (let s of shapes) {
    s.originalColor = s.color;
    s.targetColor = s.color;
  }
}

function draw() {
  background(245);
  colorMode(HSB, 360, 100, 100);

  let currentRadii = [];
  noFill();
  stroke(0, 0, 20);
  strokeWeight(2);
  for (let i = 0; i < numArcs; i++) {
    let r = ((frameCount * waveSpeed) + (i * arcSpacing)) % maxWaveRadius;
    if (r > 5) {
      arc(waveCenter.x, waveCenter.y, r * 2, r * 2, PI, TWO_PI);
      currentRadii.push(r);
    }
  }

  checkWaveCollision(currentRadii);

  for (let s of shapes) {
    push();

    let centerX = s.cx || s.x + (s.w || s.size) / 2;
    let centerY = s.cy || s.y + (s.h || s.size) / 2;
    translate(centerX, centerY);

    if (s.isHit) {
      let time1 = frameCount - s.hitFrame;
      let pulse = sin(time1 * 0.1) * 0.2;
      s.scale = 1 + pulse;

      s.color = lerpColor(s.color, s.targetColor, 0.05);

      if (time1 > PI * 10) {
        s.isHit = false;
        s.scale = 1;
        s.color = s.targetColor;
      }
    }

    scale(s.scale);

    noStroke();
    fill(s.color);

    if (s.type === 'circle') {
      circle(0, 0, s.size);
    } else if (s.type === 'square') {
      rectMode(CENTER);
      square(0, 0, s.size);
    } else if (s.type === 'rect') {
      rectMode(CENTER);
      rect(0, 0, s.w, s.h);
    } else if (s.type === 'triangle') {
      triangle(s.x1 - centerX, s.y1 - centerY, s.x2 - centerX, s.y2 - centerY, s.x3 - centerX, s.y3 - centerY);
    } else if (s.type === 'quad') {
      quad(s.x1 - centerX, s.y1 - centerY, s.x2 - centerX, s.y2 - centerY, s.x3 - centerX, s.y3 - centerY, s.x4 - centerX, s.y4 - centerY);
    }

    pop();
  }

  drawStaticElements();
}

function checkWaveCollision(radii) {
  for (let s of shapes) {
    let centerX = s.cx || s.x + (s.w || s.size) / 2;
    let centerY = s.cy || s.y + (s.h || s.size) / 2;

    let d = dist(waveCenter.x, waveCenter.y, centerX, centerY);

    for (let r of radii) {
      if (abs(r - d) < waveSpeed * 2 && !s.isHit) {
        s.isHit = true;
        s.hitFrame = frameCount;
        s.targetColor = color(random(360), 80, 100);
        break;
      }
    }
  }
}

function drawStaticElements() {
  push(); 
  
  stroke(0, 0, 0);
  strokeWeight(2);
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);
  
  let lineLength = sqrt(width * width + height * height);
  line(-lineLength / 2, 0, lineLength / 2, 0);
  line(0, -lineLength / 2, 0, lineLength / 2);
  
  pop(); 

  noStroke();
  fill(0, 0, 100);
  circle(470, 200, 25);
  fill(0, 0, 0);
  point(470, 200);
}

function keyPressed() {
  if (key === 's') {
    saveGif('과제4', 10);
  }
}