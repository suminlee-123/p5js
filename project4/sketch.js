let t = 0;

function setup() {
  pixelDensity(1);
  createCanvas(400, 267);
  colorMode(HSL);
}

function draw() {
  background('#E0E0FF');

  // 오른쪽 삼각형
  let hueShift = (sin(frameCount * 0.01) * 40) + 200;
  let shake = sin(frameCount * 0.1) * 2;

  fill(hueShift, 80, 60);
  noStroke();

  triangle(
    400 + shake, 0 + shake,
    400 + shake, 267 + shake,
    267 + shake, 133 + shake
  );

  // 선
  stroke('white');
  strokeWeight(6);
  line(333, 0, 67, 267);
  line(333, 267, 67, 0);
  line(233, 0, -33, 267);
  line(233, 267, -33, 0);
  line(133, 0, -133, 267);
  line(133, 267, -133, 0);

  stroke('#8080C0');
  strokeWeight(3);
  line(333, 0, 67, 267);
  line(333, 267, 67, 0);
  line(233, 0, -33, 267);
  line(233, 267, -33, 0);
  line(133, 0, -133, 267);
  line(133, 267, -133, 0);

  noStroke();
  fill('#CC0000');

  // 오른쪽 다이아몬드
  let scale1 = 1 + sin(frameCount * 0.07) * 0.3;
  push();
  translate(187, 133);
  scale(scale1);
  quad(0, -47, 53, 0, 0, 47, -53, 0);
  pop();

  // 왼쪽 다이아몬드
  let scale2 = 1 + cos(frameCount * 0.05 + 1) * 0.25;
  push();
  translate(73, 133);
  scale(scale2);
  quad(0, -47, 53, 0, 0, 47, -53, 0);
  pop();
}

// 's' 키로 GIF 저장 (8초)
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 8);
  }
}