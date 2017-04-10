/*
Title: frozen
Inspiration: Nature of code by Daniel Shiffman
Author: Eric Wenqi Li
*/

var origin;
var particleSystem,
  attractor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  origin = createVector(0, 0);
  particleSystem = new ParticleSystem(origin);
  attractor = new Attractor();
  background(240);
}


function draw() {
  push();
  translate(width / 2, height / 2);
  attractor.display();
  particleSystem.addAttraction(attractor);
  particleSystem.addParticle();
  particleSystem.run(attractor);
  pop();
}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
