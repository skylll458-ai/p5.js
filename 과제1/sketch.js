function setup() {
  createCanvas(600, 400);
  background(245); // 밝은 바탕

  // 큰 노랑 원
  noStroke();
  fill(255, 200, 0);
  circle(150, 120, 100);

  // 파란 원
  fill(70, 120, 200);
  circle(450, 280, 120);

  // 대비되는 빨강 원
  fill(200, 60, 60);
  circle(500, 80, 70);

  // 겹치는 검은 사각형들
  fill(0);
  square(250, 200, 40);
  square(300, 250, 60);

  // 삼각형 배치
  fill(20);
  triangle(100, 300, 180, 300, 140, 220);

  fill(120, 180, 200);
  triangle(400, 70, 450, 30, 480, 90);

  // 얇은 선 구조
  stroke(0);
  strokeWeight(2);
  line(50, 350, 550, 100);
  line(50, 100, 550, 350);

  // 방사형 원호 느낌
  noFill();
  stroke(60);
  strokeWeight(2);
  for (let r = 40; r <= 150; r += 20) {
    arc(150, 350, r, r, PI, TWO_PI);
  }

  // 작은 원들과 포인트
  noStroke();
  fill(0);
  circle(360, 120, 15);
  circle(420, 160, 10);

  fill(255);
  circle(470, 200, 25);
  fill(0);
  point(470, 200);

  // 교차 사각형 (투명도 없이 색만 다르게)
  fill(255, 50, 120);
  rect(200, 80, 60, 100);

  fill(0, 180, 180);
  rect(230, 100, 60, 100);

  // 감각적인 작은 사변형
  fill(180, 80, 200);
  quad(100, 50, 130, 70, 120, 100, 90, 80);

}
