
var Mover = function(m, x, y) {
  this.mass = m;
  this.cd = 7;
  this.pos = createVector(x, y);
  this.acc = createVector(0, 0);
  this.vel = createVector(0, 0);


  this.attract = function(m) {
    var force = p5.Vector.sub(this.pos, m.pos);
    var d = force.mag();
    if (d > 100) {
      push();
      translate(width / 2, height / 2);
      pop();
    }
    d = constrain(d, 50, 50);
    force.normalize();
    var strength = (this.mass * m.mass) / (d * d);
    force.mult(strength);
    return force;

  }
  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.pos.x = constrain(this.pos.x, -width / 2, width / 2);
    this.pos.y = constrain(this.pos.y, -height / 2, height / 2);
    this.acc.mult(0);
    this.vel.mult(0.999);
  }

  this.display = function(a) {
    //flower color
    stroke(30, 50, 40, 50);
    strokeWeight(0.2);
    push();
    translate(width / 2, height / 2 - 30);
    line(a.pos.x, a.pos.y, this.pos.x, this.pos.y, 10);
    pop();
  }

}
