var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];

  this.addParticle = function() {
    if (random(1) < 2) {
      this.particles.push(new OtherParticle(random(2, 5), this.origin));
    }
  }

  this.run = function() {
    //count backwards to make sure traverse every elements
    for (i = this.particles.length - 1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  this.connect = function() {
    for (var i = 1; i < this.particles.length - 1; i++) {
      stroke(30, 50, 40, 30);
      strokeWeight(0.3)
      line(this.particles[i].pos.x, this.particles[i].pos.y, 0, 0);
    }
  }

  this.addAttraction = function(attractor) {
    for (var i = 0; i < this.particles.length; i++) {
      var f = attractor.attract(this.particles[i]);
      this.particles[i].applyForce(f);
    }
  }
}
