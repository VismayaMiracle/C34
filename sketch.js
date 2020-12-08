const Engine=Matter.Engine
const Body=Matter.Body
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint

var engine;
var world;
var ball;
var box1;
var box2;
var ground;
var sling1;

function setup() {
  createCanvas(1200,800);
  engine=Engine.create()
  world=engine.world

  ground= new Ground(600,780,1200,20)
  ball= new Ball(600,700,50)
  sling1=new SlingShot(ball.body,{x:600,y:400})
  box1= new Box(1000,700,70,70)
  box2= new Box(1000,600,70,70)

}

function draw() {
  background(0,0,0); 
  Engine.update(engine) 
  
  ground.display()
  ball.display()
  sling1.display()
  box1.display()
  box2.display()


}

function mouseDragged()
{
Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}