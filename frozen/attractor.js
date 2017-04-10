var Attractor = function() {
  this.pos = createVector(0, 0);
  this.mass = 1;
  this.C = 1;

  var angle = random(0, PI / 2 + 1);
  this.arm = random(100, 500);

  this.attract = function(mover) {
    //compute distance
    var force = p5.Vector.sub(this.pos, mover.pos);
    var d = force.mag();
    force.normalize();
    d = constrain(d, 10, 10);

    //mag the force
    var strength = (this.C * mover.mass * this.mass) / (d * d);
    force.mult(strength);
    return force;
  }

  this.move = function() {
    this.pos.x = noise(angle) * this.arm / 2;
    angle += 0.01;
  }

  this.display = function() {
    this.move();
  }
}
