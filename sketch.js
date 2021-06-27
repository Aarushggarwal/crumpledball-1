
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paper,world,ground
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1200,650)
	paper=new Paper(200,450,20)
	ground=Bodies.rectangle(width/2,670,width,20,{isStatic:true})
	World.add(world,ground)

	//Create the Bodies Here.

    rectMode(CENTER)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display()
  paper.display()
  rect(ground.position.x,ground.position.y,width,20)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
		}
	}




