var gameState = 0;
var score = 0;


function setup() {
  createCanvas(800,400);
  engine = Matter.Engine.create();
  world = engine.world;
  box1 = new Box(700,200,20,300,0);
  box2 = new Box(650,250,20,220,0);
  box3 = new Box(100,200,20,300,0);
  box4 = new Box(400,50,600,20,0);
  box5 = new Box(610,350,200,20,0);
  box6 = new Box(680,80,50,5,180);
  box7 = new Box(190,350,200,20,0);
  ball2 = new Ball(220,150,10,true,"lol");
  ball3 = new Ball(600,200,10,true,"lol");
  ball4 = new Ball(150,250,10,true,"lol");
  ball5 = new Ball(550,250,10,true,"lol");
  lever1 = new lever(330,350,100,20);
  lever2 = new lever(470,350,100,20);


  

  

  

  ball1 = new Ball(680,200,12, false, "notLOL");


  angleMode(RADIANS);
  

}

function draw() {
  background(255,255,255); 
  Matter.Engine.update(engine);
 
    
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 lever1.display();
  lever2.display();
  

  ball1.display();

  

  textSize(16);
  text("score"+score,300,80);

  if(gameState == 1){
    score = Math.round(frameCount/30);
  }

  if(ball1.body.position.x < 650){
    gameState = 1;

  }

  if(ball1.body.position.y > 350 || ball1.body.position.y < 50 || ball1.body.position.x > 700 || ball1.body.position.x < 100){
    textSize(16);
    text("Game Over",400,150)
    gameState = 2;
    reset.visible = true;
  }

  

  detectCollision(ball2,ball1);
  detectCollision(ball3,ball1);
  detectCollision(ball4,ball1);
  detectCollision(ball5,ball1);

  
  

  drawSprites();
}

function keyPressed() {
  if(keyCode == 32) {
    if(gameState == 0) {
    
    Matter.Body.setVelocity(ball1.body,{x:2, y:-30});
  }
}
  else if(keyCode == UP_ARROW){
    if(gameState == 1){
    Matter.Body.setAngle(lever1.body, -PI/3);
    Matter.Body.setAngle(lever2.body, PI/3);
    Matter.Body.setVelocity(ball1.body,{x:2, y:-30});
  }
}
  
}

function keyReleased() {
  if(keyCode == UP_ARROW) {
    Matter.Body.setAngle(lever1.body, PI);
    Matter.Body.setAngle(lever2.body, PI);
  }
  
}

function detectCollision(ball1,ball2){
  var distance = dist(ball1.body.position.x, ball1.body.position.y, ball2.body.position.x, ball2.body.position.y);
  if(distance < 50){
    Matter.Body.setVelocity(ball1.body,{x:2.5, y:-33});
  } 
}

