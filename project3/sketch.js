let canvas;

// 안경 애니메이션 관련 변수
let glassesOffsetX = 0;
let glassesOffsetY = 0;
let glassesTilt = 0;
let shakeActive = false;
let tiltActive = false;
let shakeFrame = 0;
let tiltFrame = 0;

// 입 상태 및 볼터치 상태
let mouthState = "normal";   // "normal" 또는 "surprised"
let cheekVisible = true;     // 볼터치 표시 여부

function setup() {
  canvas = createCanvas(600, 400);
  pixelDensity(1);
  frameRate(30);
}

function draw() {
  background(240);

  drawCharacter();

  // 안경 흔들림 애니메이션
  if (shakeActive) {
    shakeFrame++;
    glassesOffsetX = sin(frameCount * 10) * 10;
    glassesOffsetY = -10;
    mouthState = "surprised";
    cheekVisible = false;
    if (shakeFrame > 30) {
      shakeActive = false;
      shakeFrame = 0;
      glassesOffsetX = 0;
      glassesOffsetY = 0;
      mouthState = "normal";
      cheekVisible = true;
    }
  }

  // 안경 기울어짐 애니메이션
  if (tiltActive) {
    tiltFrame++;
    mouthState = "surprised";
    cheekVisible = false;
    if (tiltFrame < 30) {
      glassesTilt = lerp(0, 20, tiltFrame / 30);
      glassesOffsetY = lerp(0, 15, tiltFrame / 30);
    }
    if (tiltFrame >= 60) {
      tiltActive = false;
      tiltFrame = 0;
      glassesTilt = 0;
      glassesOffsetY = 0;
      mouthState = "normal";
      cheekVisible = true;
    }
  }
}

function drawCharacter() {
  // 뒷머리
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

  // 얼굴
  fill('#FCD7B6');
  ellipse(width / 2, height / 2, 220, 280);

  // 귀
  fill('#FCD7B6');
  ellipse(width / 2 - 110, height / 2 + 10, 40, 55);
  ellipse(width / 2 + 110, height / 2 + 10, 40, 55);
  fill('#E8BFA7');
  ellipse(width / 2 - 110, height / 2 + 10, 20, 30);
  ellipse(width / 2 + 110, height / 2 + 10, 20, 30);

  // 앞머리
  fill(30);
  arc(width / 2, height / 2 - 40, 280, 200, PI, 0, CHORD);

  // 기준점
  let shiftY = 20;

  // 눈
  fill(255);
  ellipse(width / 2 - 40, height / 2 - 20 + shiftY, 45, 35);
  ellipse(width / 2 + 40, height / 2 - 20 + shiftY, 45, 35);
  fill(0);
  ellipse(width / 2 - 40, height / 2 - 20 + shiftY, 20, 20);
  ellipse(width / 2 + 40, height / 2 - 20 + shiftY, 20, 20);

  // 안경
  push();
  translate(width / 2 + glassesOffsetX, height / 2 + glassesOffsetY);
  rotate(radians(glassesTilt));
  noFill();
  stroke(40);
  strokeWeight(4);
  let lensW = 65;
  let lensH = 50;
  ellipse(-40, -20 + shiftY, lensW, lensH);
  ellipse( 40, -20 + shiftY, lensW, lensH);
  line(-40 + lensW / 2, -20 + shiftY, 40 - lensW / 2, -20 + shiftY);
  line(-40 - lensW / 2, -20 + shiftY, -110, -10);
  line( 40 + lensW / 2, -20 + shiftY,  110, -10);
  pop();

  // 코
  noStroke();
  fill('#E0A899');
  rectMode(CENTER);
  rect(width / 2, height / 2 + 20 + shiftY, 20, 35, 10);

  // 입
  if (mouthState === "normal") {
    fill('#C25B56');
    arc(width / 2, height / 2 + 65 + shiftY, 60, 40, 0, PI, CHORD);
  } else {
    fill('#C25B56');
    ellipse(width / 2, height / 2 + 65 + shiftY, 30, 40);
  }

  // 볼터치
  if (cheekVisible) {
    fill(220, 100, 110, 150);
    ellipse(width / 2 - 60, height / 2 + 20 + shiftY, 30, 20);
    ellipse(width / 2 + 60, height / 2 + 20 + shiftY, 30, 20);
  }
}

// 마우스 클릭 시 안경 흔들림 + 놀람
function mousePressed() {
  shakeActive = true;
  shakeFrame = 0;
  mouthState = "surprised";
  cheekVisible = false;
}

// 키보드 누를 때 동작
function keyPressed() {
  // 's' 키로 GIF 저장 (10초)
  if (key === 's') {
    saveGif('mySketch', 10);
  } else {
    // 다른 키 → 안경 기울어짐 + 놀람
    tiltActive = true;
    tiltFrame = 0;
    mouthState = "surprised";
    cheekVisible = false;
  }
}