var FairyIMG, FairySprite, StarSprite,StarIMG;
var StarBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	FairyIMG=loadImage("FAIRY.png")
	StarIMG=loadImage("STAR.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	StarSprite=createSprite(width/2, 80, 10,10);
	StarSprite.addImage(StarIMG)
	StarSprite.scale=0.2

	FairySprite=createSprite(width/2, 200, 10,10);
	FairySprite.addImage(FairyIMG)
	FairySprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var Star_options={
		restitution:0.5,
		isStatic:true
	}

	StarBody = Bodies.circle(width/2 , 200 , 5 , Star_options);
	World.add(world, StarBody);
	

	var ground_options={
		isStatic:true
	}

	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
   
	StarSprite.x= StarBody.position.x 
	StarSprite.y= StarBody.position.y 
	FairySprite.velocityX=0;
	keyPressed();
	right();
	left();
	drawSprites();
	
	
   
  }
  
  function keyPressed() {
	  if (keyCode === DOWN_ARROW) {
		 StarSprite.x=FairySprite.x;
		 Matter.Body.setStatic(StarBody,false);
		 StarSprite.visible=true;
	   }
	 }
  
	 function left() {
		if (keyDown("left")) {
			StarSprite.x=FairySprite.x; 
		 	FairySprite.velocityX=-5;
	   }
	 }
  
	 function right() {
		  if (keyDown("right")) {
			StarSprite.x=FairySprite.x;
		  	FairySprite.velocityX=5;
	   }
	 }

