/*
Title: ten (flower)
inspiration: Nature of code by Daniel Shiffman
Author: Eric Wenqi Li
*/

var mover = [];
var attractor,
  cNoise;
var a = 0;
var mNoise = 0;
var wNoise = 1000;
var hNoise = 1000;

var para = {
  num: 10,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var btnChange = select('#change');
  btnChange.mousePressed(changePattern);

  var mNoise = random(1000);

  for (i = 0; i < para.num; i++) {
    //generate the circle position of mover
    mover[i] = new Mover(map(random(0, 1), 0, 1, 2.5, 2.5), cos(wNoise) * height / 2.5, sin(hNoise) * height / 2.5);
    wNoise += 2 * PI / para.num;
    hNoise += 2 * PI / para.num;
  }

  attractor = new Attractor();
  background(240);
}

function draw() {
  attractor.display();
  for (i = 0; i < para.num; i++) {
    //caculate each mover's attractive force to mover[i]
    for (j = 0; j < para.num; j++) {
      var aforce = mover[j].attract(mover[i]);
    }

    //caculate attractor's force to mover[i]
    var force = attractor.attract(mover[i]);
    mover[i].applyForce(force);
    mover[i].update();
    mover[i].display(attractor);
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


function changePattern() {
  var mNoise = random(1000);
  for (i = 0; i < para.num; i++) {
    mover[i] = new Mover(map(random(0, 1), 0, 1, 2.5, 2.5), cos(wNoise) * height / 2.5, sin(hNoise) * height / 2.5);
    wNoise += 2 * PI / para.num;
    hNoise += 2 * PI / para.num;
  }
  attractor = new Attractor();
  cNoise = 0;
  background(240);
}
