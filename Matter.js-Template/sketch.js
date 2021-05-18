const Matter.Engine = engine;
const Matter.World = Engine.World;
const Matter.Constraint = Constraint;
const Matter.Bodies = Body;
var ball
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
 ball = new Log(20, 20, 15, 15)
}

function draw() {
  engine.create(World)
  Engine.update(engine)
  background(255,255,255);  
  //drawSprites();
  ball.display()
}