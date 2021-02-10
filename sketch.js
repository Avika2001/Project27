
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Offset=Matter.Offset;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var roof;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
  roof=new Roof(400,225,300,30);

  bobObject1=new Ball(320,400,20);
  bobObject2=new Ball(360,400,20);
  bobObject3=new Ball(400,400,20);
  bobObject4=new Ball(440,400,20);
  bobObject5=new Ball(480,400,20);

	rope1=new Rope(bobObject1.body,roof.body,-bobObject1.r*2,0);
	rope2=new Rope(roof.body,bobObject2.body);
	rope3=new Rope(roof.body,bobObject3.body);
	rope4=new Rope(roof.body,bobObject4.body);
	rope5=new Rope(roof.body,bobObject5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}
