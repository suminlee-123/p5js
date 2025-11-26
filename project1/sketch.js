function setup() {
    pixelDensity(1);
	createCanvas(600, 400);
	background('#E0E0FF');
  
    fill('#66B2B2');
    noStroke();
    triangle(600, 0, 600, 400, 400, 200);

  stroke('white');
  strokeWeight(9);
  line(500, 0, 100, 400);
  line(500, 400, 100, 0);
  line(350, 0, -50, 400);
  line(350, 400, -50, 0);
  line(200, 0, -200, 400);
  line(200, 400, -200, 0);

  stroke('#8080C0');
  strokeWeight(5);
  line(500, 0, 100, 400);
  line(500, 400, 100, 0);
  line(350, 0, -50, 400);
  line(350, 400, -50, 0);
  line(200, 0, -200, 400);
  line(200, 400, -200, 0);
  
  fill('#CC0000');
  noStroke();
  quad(280, 130, 360, 200, 280, 270, 200, 200);
  quad(110, 130 , 190, 200, 110, 270, 30,  200);
}
  
function keyPressed() {
  if (key === 's' || key === 'S') {
    save('myImage.png');
  }
}