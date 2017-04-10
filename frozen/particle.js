var Particle = function(mass, origin) {
  this.mass = mass;
  this.pos = origin.copy();
  this.acc = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.lifeSpan = 255;

  this.run = function(a) {
    this.update();
    this.display(a);
  }

  this.applyForce = function(force) {
    //simulate the Newton Second Law
    var f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    //simulate the natural movement
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    //reset acceloration
    this.acc.mult(0);

    //caculate the lifespan of particle
    this.lifeSpan -= 0.2;
  }

  this.isDead = function() {
    if (this.lifeSpan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.display = function(a) {
    stroke(30, 50, 40, 30);
    strokeWeight(0.1);
    line(a.pos.x, a.pos.y, this.pos.x, this.pos.y, 10);
    noStroke();
    fill(240, 30);
    ellipse(this.pos.x, this.pos.y, 2 * this.mass, 2 * this.mass);
  }
}
