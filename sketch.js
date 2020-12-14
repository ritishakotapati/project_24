var ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	dustbinObj=new dustbin(1200,650); 
	paperObject=new paper(200,450,40); 
	groundObject=new Ground(width/2,670,width,20);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here.
	
	Engine.run(engine);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dustbinObj.display(); 
  paperObject.display(); 
  groundObject.display()
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
	{Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
} 
}
}
