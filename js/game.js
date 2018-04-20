// (1) define global canvas & var, call @ corn.js under unload line. 
// this is the true global scope because this file is linked first in theh html
var canvas;
var ctx;
var boardImage = new Image();
var theGame;
var score = 0;

var Game = function(){
  this.board = {};
  this.bag = {};
  this.teamOneBags = [];
  this.teamTwoBags = [];
}



var Bag = function(){
  this.x =    160;//0
  this.y =  410;//400
  this.width = 50;
  this.height = 50;
  this.img =  './images/theNinja.png';
}

Bag.prototype.draw = function (){
  var tossImage = new Image();
  tossImage.src = this.img;
  ctx.drawImage(tossImage, this.x, this.y, this.width, this.height);
}

Bag.prototype.move = function(command){
  // ctx.clearRect(this.x,this.y,this.width,this.height);

  switch(command){
    case 37:
    this.x-=5;
    break;

    case 39:
    this.x+=5;
    break;

    default:
    console.log("Whats the magic word");
  }
  // this.draw();

}
//^drawing game projectile 
Bag.prototype.shoot = function (){
  var that = this;
  var id = setInterval(function(){

  if (that.y > 20){
    that.y -=20
  } else {
    clearInterval(id);
    that.scoreShot();
    theGame.bag = new Bag();
    theGame.bag.draw();
  }
},50)

}

// $('.score').text(score)

Bag.prototype.scoreShot = function(){
if (this.x>  theGame.board.x && this.x< theGame.board.x+theGame.board.width ){

  if(score <3){
    $(".score span").text(score)
    score += 1;
  // console.log(score);
  } else {
    alert("Good job! Your score is: ", score)
  }
  



} 
 
}



// 4 parameters 
// this.x. + this.x + this.width &&

  // when board and shooter intersect, console log."shoot"



var Board = function(){
this.x = 160;
this.y = 10;
this.width = 100;
this.height = 120;

}

Board.prototype.draw = function(){
  

  // console.log("drawing");
  // console.log(this.x);
  //right here, this = the board
  var that = this;
  // boardImage.onload = function(){
    // right here, this = the image
    // ctx.arc(that.x+40,that.y+20,15,0,2*Math.PI);
    // ctx.fill();
    ctx.drawImage(boardImage, that.x, that.y, 80, 120);
    
    
  // }

}



Board.prototype.continuousMovement = function(){

  var toTheRight = true;
 var target = 300; 
 var that = this;
 
//anything that happens inside these curly braces, will happend 10 times per second
//this = the board
setInterval(function(){
    
  if (toTheRight) {
    that.x+=10;

    if (that.x > 300) {
      toTheRight = false;
      } 
    
    } else {
      that.x-=10;
        if (that.x<20) {
          toTheRight = true;
            } // end if
    }
    
   
  
  },100)

//   function startRound (){
//   if(canToss){
//     currentRound = new Round();
//   }
// }

//   document.onkeydown = function(event){
//     var directionKeys = event.which;
//     currentRound.bag.move(directionKeys);
//   }
}

// if(toTheRight){
//   that.x+=5;
// }else{
//   that.x-=5;


// that.draw();


//1 clearRect where a the image's current position
//2 check the x position (if statement)


// else {
//   this.moveLeft();
// }
//3 if the x is too small, att to x
//4 if x is too big, subtract 1 from x
//5 draw the image again





// Bag.prototype.blah = function(){
//   console.log("hello")
// }
// Code goes here


