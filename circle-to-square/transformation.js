var Transformation = function(pos, r, count) {
  this.mass = random(0.1, 3);
  this.pos = pos.copy();
  this.timer = false;
  this.turn = false;
  this.num = 90;
  this.count = count;
  this.r = r;
  this.n = random(1000);
  this.n2 = random(100);

  this.display = function() {
    push();
    translate(width / 2, height / 2);
    rotate(radians(this.num));
    beginShape();
    for (var i = 0; i <= 360; i += 10) {
      var angle = sin(radians(this.num));
      var x = cos(radians(i));
      var y = sin(radians(i));
      var x2 = x * sqrt(1 - angle * pow(x, 2)) * map(noise(this.n), 0, 1, 1, this.r);
      var y2 = y * sqrt(1 - angle * pow(y, 2)) * map(noise(this.n), 0, 1, 1, this.r);
      strokeWeight(this.mass);
      fill(240, 30);
      stroke(0);
      ellipse(0, 0, x2, y2);

      this.mass = noise(this.n2) * 10;
      this.n2 += 0.001;
    }
    endShape();
    this.n += 0.001;
    pop();
  };

  this.update = function() {
    this.num += 1;
  };
};
