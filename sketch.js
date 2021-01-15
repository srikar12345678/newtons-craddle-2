
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	roof1=new Roof(width/2,68,300,20);
	//215,397
	bob1=new Bob(250,300);
	bob2=new Bob(300,300);
	bob3=new Bob(350,300);
	bob4=new Bob(400,300);
	bob5=new Bob(450,300);
	chain1=new Rope(bob1.body,roof1.body,-100);
	chain2=new Rope(bob2.body,roof1.body,-50);
	chain3=new Rope(bob3.body,roof1.body,0);
	chain4=new Rope(bob4.body,roof1.body,50);
	chain5=new Rope(bob5.body,roof1.body,100);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  text(mouseX+","+ mouseY,mouseX,mouseY);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20})
	}
}




