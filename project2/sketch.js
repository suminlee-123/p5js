let saveBtn;
let canvas;

function setup() {
  // 캔버스 생성
  canvas = createCanvas(600, 400);
  pixelDensity(1); // ★ 픽셀 밀도를 1로 설정 → 저장 시 600x400 유지
  background(240);
  noLoop();

  // PNG 저장 버튼
  saveBtn = createButton('PNG로 저장');
  saveBtn.position(10, 10);
  saveBtn.mousePressed(() => {
    saveCanvas(canvas, 'my_caricature', 'png'); // 600x400 그대로 저장
  });
}

function draw() {
  background(240);

  // ------------------------------------------------
  // 뒷머리 (부드러운 곡선)
  fill(30);
  noStroke();
  beginShape();
  vertex(width / 2 - 140, height / 2 - 40);
  bezierVertex(
    width / 2 - 80, height / 2 - 140,
    width / 2 + 80, height / 2 - 140,
    width / 2 + 140, height / 2 - 40
  );
  vertex(width / 2 + 160, height / 2 + 200);
  vertex(width / 2 - 160, height / 2 + 200);
  endShape(CLOSE);

  // ------------------------------------------------
  // 얼굴
  fill('#FCD7B6');
  noStroke();
  ellipse(width / 2, height / 2, 220, 280);

  // ------------------------------------------------
  // 귀
  fill('#FCD7B6');
  ellipse(width / 2 - 110, height / 2 + 10, 40, 55);
  ellipse(width / 2 + 110, height / 2 + 10, 40, 55);

  fill('#E8BFA7');
  ellipse(width / 2 - 110, height / 2 + 10, 20, 30);
  ellipse(width / 2 + 110, height / 2 + 10, 20, 30);

  // ------------------------------------------------
  // 앞머리
  fill(30);
  noStroke();
  arc(width / 2, height / 2 - 40, 280, 200, PI, 0, CHORD);

  // ------------------------------------------------
  // 기준점 (전체 요소 아래로 이동량)
  let shiftY = 20;

  // ------------------------------------------------
  // 눈
  fill(255);
  ellipse(width / 2 - 40, height / 2 - 20 + shiftY, 45, 35);
  ellipse(width / 2 + 40, height / 2 - 20 + shiftY, 45, 35);

  fill(0);
  ellipse(width / 2 - 40, height / 2 - 20 + shiftY, 20, 20);
  ellipse(width / 2 + 40, height / 2 - 20 + shiftY, 20, 20);

  // ------------------------------------------------
  // 안경 (둥근테)
  noFill();
  stroke(40);
  strokeWeight(4);
  let lensW = 65;
  let lensH = 50;
  ellipse(width / 2 - 40, height / 2 - 20 + shiftY, lensW, lensH);
  ellipse(width / 2 + 40, height / 2 - 20 + shiftY, lensW, lensH);

  // 안경 브리지
  line(
    width / 2 - 40 + lensW / 2,
    height / 2 - 20 + shiftY,
    width / 2 + 40 - lensW / 2,
    height / 2 - 20 + shiftY
  );

  // 안경 다리(귀로 가는 부분)
  line(
    width / 2 - 40 - lensW / 2,
    height / 2 - 20 + shiftY,
    width / 2 - 110,
    height / 2 - 10
  );
  line(
    width / 2 + 40 + lensW / 2,
    height / 2 - 20 + shiftY,
    width / 2 + 110,
    height / 2 - 10
  );

  // ------------------------------------------------
  // 코
  noStroke();
  fill('#E0A899');
  rectMode(CENTER);
  rect(width / 2, height / 2 + 20 + shiftY, 20, 35, 10);

  // ------------------------------------------------
  // 입
  fill('#C25B56');
  arc(width / 2, height / 2 + 65 + shiftY, 60, 40, 0, PI, CHORD);

  // ------------------------------------------------
  // 볼터치
  fill(220, 100, 110, 150);
  ellipse(width / 2 - 60, height / 2 + 20 + shiftY, 30, 20);
  ellipse(width / 2 + 60, height / 2 + 20 + shiftY, 30, 20);
}