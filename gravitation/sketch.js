/*
Title: Gravitation
Inspiration: Force by Wipawe Sirikolkarn, Nature of code by Daniel Shiffman
Author: Eric Wenqi Li
*/

var mover = [];
var attractor,
  cNoise;
var a = 0;
var mNoise = 0;
var wNoise = 1000;
var hNoise = 2000;

var para = {
  num: 400,
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 500);

  background(240);

  var btnChange = select('#change');
  btnChange.mousePressed(changePattern);

  var mNoise = random(1000);
  var wNoise = random(1000);
  var hNoise = random(2000);

  for (i = 0; i < para.num; i++) {
    mover[i] = new Mover(map(noise(mNoise), 0, 1, 0.1, 0.5), map(noise(wNoise), 0, 1, 0, width), map(noise(hNoise), 0, 1, 0, height));
    mNoise += 0.01;
    wNoise += 0.01;
    hNoise += 0.01;
  }
  attractor = new Attractor();
  cNoise = 0;
}

function draw() {
  background(240);
  for (i = 0; i < para.num; i++) {
    var force = attractor.attract(mover[i]);
    mover[i].applyForce(force);
    mover[i].update();
    mover[i].display(cNoise);
    cNoise += 0.001;
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function changePattern() {
  for (i = 0; i < para.num; i++) {
    mover[i] = new Mover(map(noise(mNoise), 0, 1, 0.1, 0.5), map(noise(wNoise), 0, 1, 0, width), map(noise(hNoise), 0, 1, 0, height));
    mNoise += 0.01;
    wNoise += 0.01;
    hNoise += 0.01;
  }
}
