

window.onload = function() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  var startToss = true;
  // var boardImage = new Image();
  boardImage.src = "./images/target-board.png";
  
//global ^ @ game.js
  // drawBoard();
  theGame = new Game();
  theGame.board = new Board();
  theGame.board.draw();
  theGame.board.continuousMovement();
  theGame.bag = new Bag();
  theGame.bag.draw();
  

  for(var x=0;x<4;x++){
   theGame.teamOneBags.push( new Bag()  )  
   theGame.teamTwoBags.push( new Bag()  )  
  }

  updateCanvas();
  
  
  
  
  
  
  // creates new game
  


  console.log(theGame);
  function updateCanvas() {
    setInterval(function(){
      ctx.clearRect(0,0,400,530);
      
      // ctx.fillText("Corn_toss: " + tossBag.x, 250,10);
      // ctx.fillText("Corn_toss: " + tossBag.y, 250,60);
      theGame.board.draw();
      theGame.bag.draw();
    }, 100);
  }
  
  // function startRound (){
  //   if(startToss){
  //     currentRound = new Round();
  //   } maybe remove...
  // }
  
    document.onkeydown = function(event){
      if(event.which ===37 || event.which ===39){
        var directionKeys = event.which;
        theGame.bag.move(directionKeys);
      } else if (event.which ===32){

        theGame.bag.shoot();
      }
    }
  
  
  
} // winow on load

    // theGame = {
    //  boxOne : {};
    //  boxTwo : {};
    //  teamOneBags : [];
    //  teamTwobags : [];
    // }
  
    // firstBag = {
    //   x:    0;
    //   y:  400;
    //   width: 50;
    //   height: 50;
    //   img:  './images/theNinja.png';
    // }
  
   
  
  //  function drawBoard(){
  
  //   // ctx.fillRect(160, 10, 80, 120);
  // boardImage.onload = function(){
  //   ctx.drawImage(boardImage, 160, 10, 80, 120);
  //   ctx.arc(200,30,15,0,2*Math.PI);
  //   ctx.fill();
    
    
  // }
  
  
  //  }
   
  
    
  
    // function boxOne (){
    // ctx.fillRect(160, 10, 80, 120);
    // ctx.clearRect(190,30, 20, 20 );
    // }
    // boxOne();
    
    
    
    
    
  // updateCanvas()
  // updateCanvas();
  // updateCanvas()
  // var Toss = function (){
    //  this.x = 540;     
    //  this.y = 650;     
    //  this.width = 20;  
    //  this.height = 20; 
    // }
    // Toss.prototype.drawToss = function(){
      //   ctx.fillRect(this.x, this.y, this.width, this.height)
      // }
  
  // var canvas = document.getElementById('canvas');
    //   var ctx = canvas.getContext('2d');
    
    
    //Lines 13- 50
    
    // function pack (){
      //   ctx.stroke();
      //   ctx.beginPath();
      //   ctx.arc(170,450,30,0,2*Math.PI);
      //   ctx.stroke();
      //   }
      //   pack()
      
      
      
      // ctx.strokeRect(50, 50, 50, 50); 
      
      //   function boxTwo (){
        //   ctx.fillRect(150, 370, 100, 150);
        //   ctx.clearRect(180, 460,40, 40);
        //   }
        //  boxTwo()
        
        // function toss () {
          
          //    ctx.fillRect(540, 660, 20, 20);
          //  }
          //  toss()
          
          // var ObjectToss = 
          // function theBeans(){
            
            //   ctx.fillStyle = "#c82124";
            //   ctx.beginPath();
            //   ctx.arc(190,500,20,0,2*Math.PI);
            //   ctx.closePath();
            //   ctx.fill();
            // function Update () {
              //   transform.position.x = Mathf.PingPong(Time.time, 2.0) - 1.0;
              // }
              // } 
              // theBeans()
              
              //   //  Call functions to move ninjaStar
              //   var tossBag = {
              //     x: 160,
              //     y: 410,
              //     moveUp:    function() { this.y -= 25 },
              //     moveDown:  function() { this.y += 25 },
              //   }
              //   function draw(tossBag) {
              //     var img = new Image ();
              //     img.onload = function() {
              //      ctx.drawImage(img, tossBag.x, tossBag.y, 100, 80);
              //     }
              //     img.src = './images/theNinja.png';
              //   }
                
              //  document.onkeydown = function(e) {
              //    switch (e.KeyCode) {
              //      case 38: tossBag.moveUp();    console.log('up',    tossBag); break;
              //      case 40: tossBag.moveDown();  console.log('down',  tossBag); break;
              //      case 37: tossBag.moveLeft();  console.log('left',  tossBag); break;
              //      case 39: tossBag.moveRight(); console.log('right', tossBag); break;
              //     }
              //     updateCanvas();
              //   }