
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700,650,1400,20);
	paper = new Paper(400)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  paper.diaplay();
  
  drawSprites();
 
}



