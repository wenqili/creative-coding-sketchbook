var Transformation = function(pos, r, count) {
    this.mass = random(0.1,3); //the weight of square
    this.pos = pos.copy();
    this.timer = false;
    this.turn = false;
    this.num = 90;
    this.count = count;//count to decide
    this.r = r;
    this.n = random(1000);
    this.n2=random(100);


    // this.acc = createVector(0,0);
    // this.vel = createVector(0,0);
    // this.lifeSpan = 255;


    this.display = function() {
        // noFill();
        // stroke(30,50,40,30);
        // strokeWeight(this.mass);

        push();
        translate(width / 2, height / 2);
        rotate(radians(this.num));
        beginShape();
        for (var i = 0; i <= 360; i += 10) {
            var angle = sin(radians(this.num));
            // var angle = 1;
            var x = cos(radians(i));
            // console.log(x);
            // var x = map(noise(this.n),0,1,-1,1);
            var y = sin(radians(i));
            // var x2 = x * sqrt(1 - angle * pow(x, 2)) * this.r;
            var x2 = x * sqrt(1 - angle * pow(x, 2)) * map(noise(this.n),0,1,1,this.r);

            // var y2 = y * sqrt(1 - angle * pow(x, 2)) * this.r;

            var y2 = y * sqrt(1 - angle * pow(y, 2)) * map(noise(this.n),0,1,1,this.r);
            strokeWeight(this.mass);
            // vertex(x2, y2);
            // noStroke();
            fill(240,30);
            // ellipse(x2,y2,this.mass*5,this.mass*5);
            // strokeWeight(10);
            stroke(0);
            ellipse(0,0,x2,y2);

            this.mass = noise(this.n2)*10;
            this.n2+=0.001;
        }
        endShape();
        this.n+=0.001;


        pop();
    }

    this.update = function() {
        // if(this.count%180>145 && this.count%180<180){
          this.num+=1;
        // }
        // this.count++;

    }

}
