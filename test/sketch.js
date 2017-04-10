/*
libs: p5
inspiration: Stir Transformation by Micharl Pinn
brief:
improvement:
*/

var square=[];

function setup() {
    //change pattern button
    // var btnChange = select('#change');
    // btnChange.mousePressed(changePattern);

    //setting
    createCanvas(windowWidth, windowHeight);
    background(240);
    square.length=1;

    var diff = 90 / square.length;
    for (var i = 0; i < square.length; i++) {
        s = (i + 1) * diff * 10;
        square[i] = new Transformation(createVector(0, 0), s, (square.length - i) * diff);

    }
}

function draw() {
    background(240);
    for (var i = 0; i < square.length; i++) {
        square[i].display();
        square[i].update();
    }


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function changePattern() {
    background(240);
    // a = [num];
    var diff = 90 / square.length;
    for (var i = 0; i < square.length; i++) {
        s = (i + 1) * diff * 5;
        square[i] = new Transformation(createVector(0, 0), s, (square.length - i) * diff);
    }
    console.log("x");
}
