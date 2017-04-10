var angle = 0;
var mNoise = 1000;

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
  this.cNoise = random(1000);
  this.pArm = height / 2;

  this.addParticle = function() {
    this.origin.x = this.pArm * cos(angle);
    this.origin.y = this.pArm * sin(angle);
    if (noise(this.cNoise) > 0.3) {
      this.particles.push(new Particle(map(noise(mNoise), 0, 1, 1, 3), this.origin));
    }
    angle += 0.008;
    mNoise += 0.1;
    this.cNoise += 0.1;
    this.pArm -= 0.1;
    this.pArm = constrain(this.pArm, 0, height / 2);
  }

  this.addAttraction = function(attractor) {
    for (var i = 0; i < this.particles.length; i++) {
      var f = attractor.attract(this.particles[i]);
      this.particles[i].applyForce(f);
    }
  }

  this.run = function(attractor) {
    //count backwards to make sure traverse every elements
    for (i = this.particles.length - 1; i >= 0; i--) {
      var p = this.particles[i];
      p.run(attractor);
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
