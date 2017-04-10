/*
Title: collapsar
inspiration: Nature of code by Daniel Shiffman
Author: Eric Wenqi Li
*/


var origin,
  particleSystem,
  attractor;


function setup() {
  createCanvas(windowWidth, windowHeight);
  origin = createVector(0, 0);
  particleSystem = new ParticleSystem(origin);
  background(240);
}


function draw() {
  push();
  translate(width / 2, height / 2);
  particleSystem.addParticle();
  particleSystem.run();
  particleSystem.connect();
  pop();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
