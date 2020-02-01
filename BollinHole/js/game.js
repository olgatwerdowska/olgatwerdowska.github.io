
var Field = class Field{
  holesList = new Array();
  ctx;
  constructor(field){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.initializeCanvas(field);
    this.ball = new Ball(this.ctx);
    this.finish = new Finish(this.ctx);
    this.finish.initializeFinish();
    this.holeGenerator();
  }
  
  initializeCanvas(field){
    if (field){
      this.canvas = document.getElementById(field);
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }else {
      throw new Error('You have to provide Canvas ID');
    }
  }

  holeGenerator(){
    const hole1 = new Hole(this.ctx);
    hole1.posotionX = 70;
    hole1.posotionY = 70
    this.holesList.push(hole1);
    hole1.initializeHole();
    for ( var i = 0 ; i < 100; i++){
     const hole = new Hole(this.ctx);
     
     if (this.placeForHoleIsEmpty(hole))
     {
      this.holesList.push(hole);
      hole.initializeHole();
     }
     
    }
  }

  placeForHoleIsEmpty(hole)
  {
    var radius = 30;
    var bool1 = true;

    this.holesList.forEach(function(props){
      if ((props.posotionX < hole.posotionX) && (props.posotionY < hole.posotionY)){
        hole.posotionX = hole.posotionX + radius;
        hole.posotionY = hole.posotionY + radius;
        bool1 = true
      } else {
        bool1 = false
      }
    })
    if(bool1){
      return true
    }else{
      return false
    }
  }

  BallMove(event){
    var x = event.beta;
    var y = event.gamma;

    if (x >  90) { x =  90};
    if (x < -90) { x = -90};

    x += 5;
    y += 5;
    var canvasHeight = window.innerHeight;
    var canvasWidth = window.innerWidth;

    field.ball.y = (canvasHeight * y / 180 - 20);
    field.ball.x = (canvasWidth * x / 180 - 20);

    field.ctx.clearRect(field.ball.x - 5, field.ball.y - 5 , 50, 50);
    field.ball.initializeBall();
  }
}


class Ball{
  width;
  height;
  x;
  y;
  ctx;
  constructor(mCanvas){
    this.width = 40
    this.height = 40
    this.ctx = mCanvas;
    this.x = 0
    this.y = 0
  }
  initializeBall(){
    const ballImage = new Image();
    ballImage.src = "./img/ball.png";
    ballImage.addEventListener('load', () =>{
    this.ctx.drawImage(ballImage,this.x, this.y, this.width, this.height);
    });
  }
}

class Hole{

  width = 40;
  height = 40;
  canvasHeight = window.innerHeight;
  canvasWidth = window.innerWidth;
  maxRandomX = this.canvasWidth - (100);
  maxRandomY = this.canvasHeight - (100);
  minRandomX  = this.width + 50;
  minRandomY = this.height + 50;
  
  
  constructor(mCanvas){
    this.ctx = mCanvas;
    this.posotionX = (Math.floor(Math.random() * (this.maxRandomX - this.minRandomX + 1)) + this.minRandomX) - 128;
    this.posotionY = (Math.floor(Math.random() * (this.maxRandomY - this.minRandomY  + 1)) + this.minRandomY) - 128;
  }

  initializeHole(){
    var hole = new Path2D();
    this.ctx.fillStyle = "black";
    hole.arc(this.posotionX,this.posotionY, 20, 0, 2 * Math.PI);
    this.ctx.fill(hole);
    this.ctx.stroke();
  }
}

class Finish{
  constructor(mCanvas){
    this.width = 50;
    this.height = 50;
    this.ctx = mCanvas;
    this.canvasHeight = window.innerHeight;
    this.canvasWidth = window.innerWidth;
  }

  initializeFinish(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect((this.canvasWidth - this.width), (this.canvasHeight - this.height), this.width, this.height);
  }
}













