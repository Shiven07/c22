
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object;
var ground,ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  //creating engine
engine=Engine.create() ;
//assigning world to engine
world = engine.world;
//creating objectusing bodies
object = Bodies.rectangle(200,100,50,50);
//adding object to the world
World.add(world,object);

var ground_options = {
  isStatic:true
  
  
  }
  

ground = Bodies.rectangle(200,390,400,50,ground_options);
//adding object to the world
World.add(world,ground);
  
var ball_options = {
  restitution:1.0
  
  
  }
  
ball = Bodies.circle(200,100,20,ball_options);
//adding ball to the world
World.add(world,ball);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  

  rectMode(CENTER);

rect(object.position.x,object.position.y,50,50);
rect(ground.position.x,ground.position.y,400,20);
circle(ball.position.x,ball.position.y,20);
  rect(200,200,50,50);
  drawSprites();
}

