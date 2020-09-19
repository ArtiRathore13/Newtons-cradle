
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

    bob1=new Bob(320,300,20);
    bob2=new Bob(360,300,20);
    bob3=new Bob(400,300,20);
    bob4=new Bob(440,300,20);
    bob5=new Bob(480,300,20);
    ground=new Ground(400,170,400,45);
    rope1 = new Rope({x:320,y:170},bob1.body)
    rope2 = new Rope({x:360,y:170},bob2.body)
    rope3 = new Rope({x:400,y:170},bob3.body)
    rope4 = new Rope({x:440,y:170},bob4.body)
    rope5 = new Rope({x:480,y:170},bob5.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}
function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-95,y:-50})
  }
  
  }
  


