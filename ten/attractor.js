var Attractor = function() {
    this.pos = createVector(0, 0);
    this.mass = 1;
    this.C = 1;
    var angle = random(0, PI / 2 + 1);
    var arm = random(120, 280);
    // console.log(arm);

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
        // this.pos.x = cos(angle)*noise(arm)*width/2;
        // this.pos.y = sin(angle)*noise(arm)*500;

        this.pos.x = cos(angle) * arm / 2;
        this.pos.y = sin(angle) * arm / 2;
        angle += 0.01;
        arm -= 1;
        arm = constrain(arm, 0, 500);
    }

    this.display = function() {
        push();
        this.move();
        translate(width / 2, height / 2 -30);
        pop();
    }

}
