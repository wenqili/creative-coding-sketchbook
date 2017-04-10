var rNoise = 1000;
var a = 0;

var OtherParticle = function(mass, origin) {
  Particle.call(this, mass, origin);
  this.angle = 0;
  this.aVel = 0.015;
  this.aAcc = 0.00001;
  this.radius = map(noise(rNoise), 0, 1, 0, height / 1.8);
  this.pos = origin.copy();

  this.display = function() {
    rNoise += 0.01;
    this.angle += this.aVel;
    this.aVel += this.aAcc;
    if (this.angel > 2 * PI || this.angle < 0) {
      this.aVel -= 0.1;
      this.aAcc -= 0.1;
    }
    fill(240);
    strokeWeight(0.5);
    stroke(240, 255 - this.lifeSpan);
    a += 0.000005;
    this.pos.y = sin(a) * cos(this.angle) * this.radius;
    this.pos.x = sin(a) * sin(this.angle + 100) * this.radius;
    rect(this.pos.x, this.pos.y, this.mass * 5, this.mass * 5);
  }
}

// Inherit from the parent class
OtherParticle.prototype = Object.create(Particle.prototype);
OtherParticle.prototype.constructor = OtherParticle;
