const CIRCLE_SIZE = 500;
const SIDES = 6;
let PALETTE = [];
var angles = [ 270,90 ];

function setup(){

    var cnvs = createCanvas(550,550);
    cnvs.parent('wrapper');
    PALETTE = [
        color(33,150,243),
        color(25,25,25)

    ];
    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);

}

function draw(){

    background(247);

    let stepped = new SteppedHexagons();
    stepped.render();

    // let circles = new Circles();
    // circles.render();

    let dotLines = new DottedLines();
    dotLines.render();

    // let outline = new OutLineShape();
    // outline.render();

}

var buttonClicked = document.querySelector('#btn').addEventListener('click', function(){
    draw();
});










// initial design constraints + lines
function designConstraints(){

    let lineNum = selectRandomTwo() ? SIDES : SIDES*2;
    let strokeColor = getRandomColor();

    noFill();
    push();
        translate(width/2,height/2);
        stroke(PALETTE[0]);
        ellipse(0,0,CIRCLE_SIZE,CIRCLE_SIZE);
        stroke(strokeColor);
        const angle = 360/lineNum;
        for(var i = 0; i < lineNum; i++){
            line(0,0,CIRCLE_SIZE/2,0);
            rotate(angle);
        }
    pop();

}

