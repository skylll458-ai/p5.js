function setup() {
  // 캔버스 크기를 600x400으로 설정
  createCanvas(600, 400);

  // 모든 좌표와 크기에 적용할 축소 비율
  const scaleFactor = 400 / 600; 
  // 중앙 정렬을 위한 x축 이동값
  const xOffset = (600 - 600 * scaleFactor) / 2;

  // --- 하늘색 배경 ---
  background(135, 206, 250);

  // --- 구름 ---
  fill(255);
  noStroke();

  // 구름 1
  ellipse(120 * scaleFactor + xOffset, 320 * scaleFactor, 80 * scaleFactor, 60 * scaleFactor);
  ellipse(160 * scaleFactor + xOffset, 320 * scaleFactor, 80 * scaleFactor, 60 * scaleFactor);
  ellipse(140 * scaleFactor + xOffset, 300 * scaleFactor, 80 * scaleFactor, 60 * scaleFactor);

  // 구름 2
  ellipse(420 * scaleFactor + xOffset, 230 * scaleFactor, 100 * scaleFactor, 70 * scaleFactor);
  ellipse(470 * scaleFactor + xOffset, 230 * scaleFactor, 100 * scaleFactor, 70 * scaleFactor);
  ellipse(445 * scaleFactor + xOffset, 210 * scaleFactor, 100 * scaleFactor, 70 * scaleFactor);

  // 구름 3
  ellipse(200 * scaleFactor + xOffset, 140 * scaleFactor, 60 * scaleFactor, 40 * scaleFactor);
  ellipse(230 * scaleFactor + xOffset, 140 * scaleFactor, 60 * scaleFactor, 40 * scaleFactor);
  ellipse(215 * scaleFactor + xOffset, 125 * scaleFactor, 60 * scaleFactor, 40 * scaleFactor);

  // --- 얼굴 ---
  noStroke();
  fill(255, 224, 189); // 피부색
  ellipse(300 * scaleFactor + xOffset, 300 * scaleFactor, 240 * scaleFactor, 240 * scaleFactor); // 얼굴

  // --- 머리 ---
  fill(139, 90, 43); // 머리색
  ellipse(300 * scaleFactor + xOffset, 280 * scaleFactor, 270 * scaleFactor, 280 * scaleFactor);
  ellipse(200 * scaleFactor + xOffset, 330 * scaleFactor, 100 * scaleFactor, 180 * scaleFactor);
  ellipse(400 * scaleFactor + xOffset, 330 * scaleFactor, 100 * scaleFactor, 180 * scaleFactor);
  ellipse(180 * scaleFactor + xOffset, 350 * scaleFactor, 100 * scaleFactor, 100 * scaleFactor);
  ellipse(420 * scaleFactor + xOffset, 350 * scaleFactor, 100 * scaleFactor, 100 * scaleFactor);

  fill(255, 224, 189);
  circle(205 * scaleFactor + xOffset, 510 * scaleFactor, 40 * scaleFactor);
  circle(390 * scaleFactor + xOffset, 510 * scaleFactor, 40 * scaleFactor);

  // --- 몸 ---
  fill(255, 255, 240); // 티셔츠 색
  rect(220 * scaleFactor + xOffset, 405 * scaleFactor, 160 * scaleFactor, 130 * scaleFactor, 20 * scaleFactor);

  fill(230, 180, 150);
  triangle(
    300 * scaleFactor + xOffset, 435 * scaleFactor,
    270 * scaleFactor + xOffset, 405 * scaleFactor,
    330 * scaleFactor + xOffset, 405 * scaleFactor
  );

  // 어깨 부분
  fill(255, 255, 240);
  triangle(
    220 * scaleFactor + xOffset, 420 * scaleFactor,
    180 * scaleFactor + xOffset, 500 * scaleFactor,
    220 * scaleFactor + xOffset, 500 * scaleFactor
  );
  triangle(
    380 * scaleFactor + xOffset, 420 * scaleFactor,
    420 * scaleFactor + xOffset, 500 * scaleFactor,
    380 * scaleFactor + xOffset, 500 * scaleFactor
  );

  // 얼굴 다시 덧칠
  fill(255, 224, 189);
  ellipse(190 * scaleFactor + xOffset, 310 * scaleFactor, 60 * scaleFactor, 60 * scaleFactor);
  ellipse(410 * scaleFactor + xOffset, 310 * scaleFactor, 60 * scaleFactor, 60 * scaleFactor);

  fill(230, 180, 150);
  ellipse(190 * scaleFactor + xOffset, 310 * scaleFactor, 40 * scaleFactor, 40 * scaleFactor);
  ellipse(410 * scaleFactor + xOffset, 310 * scaleFactor, 40 * scaleFactor, 40 * scaleFactor);

  fill(255, 224, 189);
  ellipse(300 * scaleFactor + xOffset, 300 * scaleFactor, 220 * scaleFactor, 220 * scaleFactor);

  // --- 눈 ---
  fill(255);
  circle(250 * scaleFactor + xOffset, 300 * scaleFactor, 60 * scaleFactor);
  circle(350 * scaleFactor + xOffset, 300 * scaleFactor, 60 * scaleFactor);

  fill(0);
  circle(250 * scaleFactor + xOffset, 300 * scaleFactor, 40 * scaleFactor);
  circle(350 * scaleFactor + xOffset, 300 * scaleFactor, 40 * scaleFactor);

  // 눈 반짝이
  fill(255);
  circle(245 * scaleFactor + xOffset, 295 * scaleFactor, 15 * scaleFactor);
  circle(345 * scaleFactor + xOffset, 295 * scaleFactor, 15 * scaleFactor);

  // --- 볼터치 ---
  fill(255, 150, 170, 180);
  ellipse(230 * scaleFactor + xOffset, 345 * scaleFactor, 40 * scaleFactor, 25 * scaleFactor);
  ellipse(370 * scaleFactor + xOffset, 345 * scaleFactor, 40 * scaleFactor, 25 * scaleFactor);

  // --- 코 ---
  fill(240, 180, 160);
  ellipse(300 * scaleFactor + xOffset, 340 * scaleFactor, 12 * scaleFactor, 8 * scaleFactor);

  // --- 입술 ---
  fill(230, 100, 120);
  arc(300 * scaleFactor + xOffset, 360 * scaleFactor, 70 * scaleFactor, 70 * scaleFactor, radians(0), radians(180));

  // --- 앞머리 ---
  fill(139, 90, 43);
  ellipse(260 * scaleFactor + xOffset, 220 * scaleFactor, 90 * scaleFactor, 90 * scaleFactor);
  ellipse(300 * scaleFactor + xOffset, 210 * scaleFactor, 100 * scaleFactor, 100 * scaleFactor);
  ellipse(340 * scaleFactor + xOffset, 220 * scaleFactor, 90 * scaleFactor, 90 * scaleFactor);
  ellipse(220 * scaleFactor + xOffset, 230 * scaleFactor, 90 * scaleFactor, 90 * scaleFactor);
  ellipse(380 * scaleFactor + xOffset, 230 * scaleFactor, 90 * scaleFactor, 90 * scaleFactor);

  // --- 하트 ---
  fill(230, 10, 10);
  triangle(
    300 * scaleFactor + xOffset, 505.6 * scaleFactor,
    274.4 * scaleFactor + xOffset, 480.6 * scaleFactor,
    325.6 * scaleFactor + xOffset, 480.6 * scaleFactor
  );
  arc(285 * scaleFactor + xOffset, 470 * scaleFactor, 30 * scaleFactor, 30 * scaleFactor, radians(135), radians(45));
  arc(315 * scaleFactor + xOffset, 470 * scaleFactor, 30 * scaleFactor, 30 * scaleFactor, radians(135), radians(45));
  rect(274.4 * scaleFactor + xOffset, 470 * scaleFactor, 51.2 * scaleFactor, 10.6 * scaleFactor);
}
