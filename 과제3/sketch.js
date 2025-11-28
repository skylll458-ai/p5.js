
let charX, charY;
let scaleFactor;


let isTeleporting = false;
let teleportStartTime = 0;

function setup() {
  createCanvas(600, 400);
  scaleFactor = 400 / 600;

  charX = width / 2;
  charY = height / 2;
}

function draw() {
  if (mouseIsPressed) {
    background(255, 192, 203);
  } else {
    drawEnvironment();
  }
  

  if (isTeleporting && millis() - teleportStartTime > 1000) {
    isTeleporting = false;
  }

  drawCharacter(charX, charY);
  
  // 마법 지팡이
  let wandBaseX = charX + 90 * scaleFactor;
  let wandBaseY = charY + 210 * scaleFactor;
  drawWand(wandBaseX, wandBaseY);

  // 마법 효과
  if (mouseIsPressed) {
    drawMagicEffect();
  }
}

// 순간이동
function keyPressed() {
  if (key === ' ') {
    charX = random(100, width - 100);
    charY = random(100, height - 100);
    
    // 순간이동 표정
    isTeleporting = true;
    teleportStartTime = millis(); 
  }
    
    // 저장용
  if (key === 's') {
    saveGif('과제3', 10);
  }
}

function drawCharacter(cx, cy) {
  let sf = scaleFactor;
  
  //팔과 손
  fill(255, 224, 189);
  // 오른팔 (지팡이를 든 팔)
  ellipse(cx + 80 * sf, cy + 80 * sf, 30 * sf, 60 * sf);
  // 오른손
  circle(cx + 90 * sf, cy + 85 * sf, 40 * sf);

  // 얼굴
  noStroke();
  fill(255, 224, 189);
  ellipse(cx, cy, 240 * sf, 240 * sf);

  // 머리
  fill(139, 90, 43);
  ellipse(cx, cy - 20 * sf, 270 * sf, 280 * sf);
  ellipse(cx - 100 * sf, cy + 30 * sf, 100 * sf, 180 * sf);
  ellipse(cx + 100 * sf, cy + 30 * sf, 100 * sf, 180 * sf);
  ellipse(cx - 120 * sf, cy + 50 * sf, 100 * sf, 100 * sf);
  ellipse(cx + 120 * sf, cy + 50 * sf, 100 * sf, 100 * sf);
  fill(255, 224, 189);
  circle(cx - 95 * sf, cy + 210 * sf, 40 * sf);
  circle(cx + 90 * sf, cy + 210 * sf, 40 * sf);

  // 몸
  fill(255, 255, 240);
  rect(cx - 80 * sf, cy + 105 * sf, 160 * sf, 130 * sf, 20 * sf);
  fill(230, 180, 150);
  triangle(cx, cy + 135 * sf, cx - 30 * sf, cy + 105 * sf, cx + 30 * sf, cy + 105 * sf);
  fill(255, 255, 240);
  triangle(cx - 80 * sf, cy + 120 * sf, cx - 120 * sf, cy + 200 * sf, cx - 80 * sf, cy + 200 * sf);
  triangle(cx + 80 * sf, cy + 120 * sf, cx + 120 * sf, cy + 200 * sf, cx + 80 * sf, cy + 200 * sf);
  fill(255, 224, 189);
  ellipse(cx - 110 * sf, cy + 10 * sf, 60 * sf, 60 * sf);
  ellipse(cx + 110 * sf, cy + 10 * sf, 60 * sf, 60 * sf);
  fill(230, 180, 150);
  ellipse(cx - 110 * sf, cy + 10 * sf, 40 * sf, 40 * sf);
  ellipse(cx + 110 * sf, cy + 10 * sf, 40 * sf, 40 * sf);
  fill(255, 224, 189);
  ellipse(cx, cy, 220 * sf, 220 * sf);

  //눈
  if (isTeleporting) {
    // >< 표정
    strokeWeight(4);
    stroke(0);
    // 왼쪽 눈 >
    line(cx - 60 * sf, cy - 10 * sf, cx - 40 * sf, cy);
    line(cx - 60 * sf, cy + 10 * sf, cx - 40 * sf, cy);
    // 오른쪽 눈 <
    line(cx + 60 * sf, cy - 10 * sf, cx + 40 * sf, cy);
    line(cx + 60 * sf, cy + 10 * sf, cx + 40 * sf, cy);
    noStroke();
  } else {
    // 원래 눈
    fill(255);
    circle(cx - 50 * sf, cy, 60 * sf);
    circle(cx + 50 * sf, cy, 60 * sf);
    fill(0);
    circle(cx - 50 * sf, cy, 40 * sf);
    circle(cx + 50 * sf, cy, 40 * sf);
    fill(255);
    circle(cx - 55 * sf, cy - 5 * sf, 15 * sf);
    circle(cx + 45 * sf, cy - 5 * sf, 15 * sf);
  }

  // 볼터치, 코, 입술
  fill(255, 150, 170, 180);
  ellipse(cx - 70 * sf, cy + 45 * sf, 40 * sf, 25 * sf);
  ellipse(cx + 70 * sf, cy + 45 * sf, 40 * sf, 25 * sf);
  fill(240, 180, 160);
  ellipse(cx, cy + 40 * sf, 12 * sf, 8 * sf);
  fill(230, 100, 120);
  arc(cx, cy + 60 * sf, 70 * sf, 70 * sf, radians(0), radians(180));

  // 앞머리
  fill(139, 90, 43);
  ellipse(cx - 40 * sf, cy - 80 * sf, 90 * sf, 90 * sf);
  ellipse(cx, cy - 90 * sf, 100 * sf, 100 * sf);
  ellipse(cx + 40 * sf, cy - 80 * sf, 90 * sf, 90 * sf);
  ellipse(cx - 80 * sf, cy - 70 * sf, 90 * sf, 90 * sf);
  ellipse(cx + 80 * sf, cy - 70 * sf, 90 * sf, 90 * sf);

  // 하트
  fill(230, 10, 10);
  triangle(cx, cy + 205.6 * sf, cx - 25.6 * sf, cy + 180.6 * sf, cx + 25.6 * sf, cy + 180.6 * sf);
  arc(cx - 15 * sf, cy + 170 * sf, 30 * sf, 30 * sf, radians(135), radians(45));
  arc(cx + 15 * sf, cy + 170 * sf, 30 * sf, 30 * sf, radians(135), radians(45));
  rect(cx - 25.6 * sf, cy + 170 * sf, 51.2 * sf, 10.6 * sf);
}

// 마법 지팡이를 그리는 함수
function drawWand(baseX, baseY) {
  push();
  translate(baseX, baseY);
  let angle = atan2(mouseY - baseY, mouseX - baseX);
  rotate(angle);
  strokeWeight(4);
  stroke(139, 69, 19);
  line(0, 0, 80, 0);
  noStroke();
  fill(255, 215, 0);
  star(80, 0, 10, 20, 5);
  pop();
}

function drawEnvironment() {
  background(135, 206, 250);
  fill(255);
  noStroke();
  let sf = scaleFactor; let xo = (width - width*sf)/2; 
  ellipse(120*sf+xo, 320*sf, 80*sf, 60*sf); 
  ellipse(160*sf+xo, 320*sf, 80*sf, 60*sf); 
  ellipse(140*sf+xo, 300*sf, 80*sf, 60*sf);
  ellipse(420*sf+xo, 230*sf, 100*sf, 70*sf); 
  ellipse(470*sf+xo, 230*sf, 100*sf, 70*sf); 
  ellipse(445*sf+xo, 210*sf, 100*sf, 70*sf);
  ellipse(200*sf+xo, 140*sf, 60*sf, 40*sf); 
  ellipse(230*sf+xo, 140*sf, 60*sf, 40*sf); 
  ellipse(215*sf+xo, 125*sf, 60*sf, 40*sf);
}

// 별
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints; 
  let halfAngle = angle / 2.0; 
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) { let sx = x + cos(a) * radius2; let sy = y + sin(a) * radius2; vertex(sx, sy); sx = x + cos(a + halfAngle) * radius1; sy = y + sin(a + halfAngle) * radius1; vertex(sx, sy); }
  endShape(CLOSE);
}

// 마법 효과
function drawMagicEffect() {
  for (let i = 0; i < 10; i++) {
    let particleX = mouseX + random(-120, 120); 
    let particleY = mouseY + random(-120, 120); 
    let particleSize = random(5, 20); 
    let particleColor = color(255, random(150, 255), random(150, 255), 200); 
    
    noStroke(); 
    fill(particleColor); 
    ellipse(particleX, particleY, particleSize, particleSize); 
    
  }
}
