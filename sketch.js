//creating variables
var path;
var path_running;
var runner;
var runner_running;
var invisibleGround1;
var invisibleGround2;
var invisibleGround3;

function preload(){
  //pre-load images
  path_running = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //creating sprites 
 path = createSprite(200,200);
 path.addImage("running",path_running);
 path.velocityY = 4
 path.scale = 1.2;

 runner = createSprite(200,200,20,20);
 runner.addAnimation("running",runner_running);
 runner.scale = 0.1;

 invisibleGround1 = createSprite(380,200,30,400);
 invisibleGround1.visible = false;

 invisibleGround2 = createSprite(20,200,30,400);
 invisibleGround2.visible = false;

  }

function draw() {
  background(0);

  if (path.y > 400)
  {
    path.y = height/2;
  }

  runner.x = World.mouseX;
 
  runner.collide (invisibleGround1);
  runner.collide (invisibleGround2);

  drawSprites();

}
