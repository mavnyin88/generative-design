class Layers{

    constructor(){

        this.sides = SIDES;
        this.numberOfShapes = this.sides;
        this.angle = 360/this.numberOfShapes;
        this.stepsOut = 8;
        this.singleStep = (CIRCLE_SIZE/2) / this.stepsOut;
        this.thinStroke = 1;
        this.thickStroke = 3;
        this.strokeColor = getRandomColor();

    }

}

class Circles extends Layers{

    constructor(){

        super();
        this.innerCircleSize = (CIRCLE_SIZE/2) * 0.93;
        this.position = (CIRCLE_SIZE/2) - (this.innerCircleSize/2);

    }

    render(){

        noFill();
        stroke(this.strokeColor);
        strokeWeight(this.thinStroke);
        push();
            translate(width/2,height/2);
            for(let i = 0; i < this.numberOfShapes; i++){
                ellipse(this.position,0,this.innerCircleSize,this.innerCircleSize);
                rotate(this.angle);
            }
        pop();

    }

}

class OutLines extends Layers{

    constructor(){
        
        super();
        //how many steps
        this.numSteps = selectRandomTwo() ? this.stepsOut : int(this.stepsOut * 1.25);
        //find out the distance
        this.step = (CIRCLE_SIZE/2) / this.numSteps;
        //start line and end line
        this.start = floor(random(0,this.numSteps));
        this.stop = floor(random(this.start,this.numSteps+1));

        this.lineNum = selectRandomTwo() ? this.sides : this.sides * 2;
        this.angle = 360 / this.lineNum;

        this.weight = selectRandomTwo() ? this.thinStroke : this.thickStroke;
        
    }

    render(){
        stroke(this.strokeColor);
        strokeWeight(this.weight);
        noFill();
        translate(width/2,height/2);
        for(let i = 0; i < this.lineNum; i++){
            line(this.start * this.step, 0, this.stop * this.step, 0);
            rotate(this.angle);
        }
    }

}

class OutLineShape extends Layers{

    constructor(){
    
        super();
        this.weight = selectRandomTwo() ? this.thinStroke : this.thickStroke;
        this.hexagonTrue = selectRandomTwo();

    }

    render(){

        stroke(this.strokeColor);
        strokeWeight(this.weight);
        noFill();

        push();
            translate(width/2,height/2);
            if(this.hexagonTrue){
                hexagon(0,0,CIRCLE_SIZE/2);
            }
            else{
                ellipse(0,0,CIRCLE_SIZE,CIRCLE_SIZE);
            }
        pop();

    }

}

class SteppedHexagons extends Layers {             
    constructor () {
      super();
      this.numberOfShapes = selectRandomTwo() ? this.stepsOut : this.stepsOut * 1.25;
      this.centerOffset = (CIRCLE_SIZE / 2) * 0.15;
      this.singleStep = ((CIRCLE_SIZE / 2) - this.centerOffset) / this.numberOfShapes;
      this.weight = selectRandomTwo() ? this.thinStroke : this.thickStroke;
    }
  
    render () {
      stroke(this.strokeColor);
      noFill();
      strokeWeight(this.weight);
      push();
      translate(width / 2, height / 2);
      rotate(this.angle / 2);
      for (let i = 1; i < this.numberOfShapes + 1; i++) {
        hexagon(0, 0, this.centerOffset + (i * this.singleStep));
      }
      pop();
    }
  }

  class DottedLines extends Layers{                           
    constructor () {
      super()
      this.numberOfShapes = selectRandomTwo() ? this.sides : this.sides * 2
      this.angle = 360 / this.numberOfShapes
      this.shapeSize = 3
      this.centerOffset = this.singleStep
    }
  
    render () {
      fill(this.strokeColor)
      noStroke()
      push()
      translate(width / 2, height / 2)
      for(let i = 0; i <= this.numberOfShapes; i++) {
        for(let x = this.centerOffset; x < CIRCLE_SIZE / 2; x += this.singleStep) {
          rect(x, 0, this.shapeSize, this.shapeSize)
        }
        rotate(this.angle)
      }
      pop()
    }
  }
  
  class RingOfShapes extends Layers {                    
    constructor () {
      super()
      this.steps = floor(random(1, this.stepsOut))
      this.center = this.steps * this.singleStep
      this.randomShape = random(1)
      this.direction = selectRandomTwo() // used for triangle only
      this.fillColor = selectRandomTwo() ? this.strokeColor : color(0, 1)
      this.weight = selectRandomTwo() ? this.thinStroke : this.thickStroke
  
      if (this.steps < this.stepsOut / 2) {
        this.radius = floor(random(1, this.steps)) * this.singleStep
      } else if (this.steps > this.stepsOut / 2) {
        this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
      } else {
        this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
      }
    }
  
    render () {
      stroke(this.strokeColor)
      fill(this.fillColor)
      fill(255);
      strokeWeight(this.weight)
      push()
      translate(width / 2, height / 2)
      for (let i = 0; i < this.numberOfShapes; i++) {
        if (this.randomShape < 0.33) {
          ellipse(0, this.center, this.radius, this.radius)
        } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
          rect(0, this.center, this.radius, this.radius)
        } else if (this.randomShape >= 0.66) {
            myTriangle(this.center, this.radius, this.direction)
        }
        rotate(this.angle)
      }
      pop()
    }
  }