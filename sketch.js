let x;
let y;
let bg;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload() {
  rtekLogo = loadImage('small_rtekLogo.png');
}

function setup() {
  bg = loadImage('comenzamosBG.png');
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 6;
  yspeed = 6;
  //pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(bg);
  //tint(r, g, b);
  image(rtekLogo, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + rtekLogo.width >= width) {
    xspeed = -xspeed;
    x = width - rtekLogo.width;
    //pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    //pickColor();
  }

  if (y + rtekLogo.height >= height) {
    yspeed = -yspeed;
    y = height - rtekLogo.height;
    //pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    //pickColor();
  }
}
