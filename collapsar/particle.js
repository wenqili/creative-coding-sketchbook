var Particle = function(mass, origin) {
  this.mass = mass;
  this.pos = origin.copy();
  this.acc = createVector(0, -1);
  this.vel = createVector(-10, 0);
  this.lifeSpan = 255;

  this.run = function() {
    this.update();
    this.display();
  }

  this.update = function() {
    //simulate the natural movement
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    //caculate the lifespan of particle
    this.lifeSpan -= 0.5;
  }

  this.display = function(a) {
    fill(127, this.lifespan);
    ellipse(this.pos.x, this.pos.y, 100 * this.mass, 10 * this.mass);
  }

  this.applyForce = function(force) {
    //simulate the Newton Second Law
    var f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  this.isDead = function() {
    if (this.lifeSpan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.attract = function(m) {
    var force = p5.Vector.sub(this.pos, m.pos);
    d = force.mag();
    if (d < 20) {
      line(this.pos.x, this.pos.y, m.pos.x, m.pos.y);
    }
    d = constrain(d, 50, 50);
    force.normalize();
    var strength = (this.mass * m.mass) / (d * d);
    force.mult(strength);
    return force;
  }
}
