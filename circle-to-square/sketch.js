/*
libs: p5
inspiration: Stir Transformation by Micharl Pinn
Author: Eric Wenqi Li
*/

var square = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  square.length = 1;

  var diff = 90 / square.length;
  for (var i = 0; i < square.length; i++) {
    s = (i + 1) * diff * 10;
    square[i] = new Transformation(createVector(0, 0), s, (square.length - i) * diff);
  }
}

function draw() {
  background(240);
  for (var i = 0; i < square.length; i++) {
    square[i].display();
    square[i].update();
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
