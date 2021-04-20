const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunder1,thunder2,thunder3,thunder4;
var maxDrops = 100;

var drops=[];
var rain=[];

var engine, world;

var rand;



var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("LIGHTNING/1.png");
    thunder2 = loadImage("LIGHTNING/2.png");
    thunder3 = loadImage("LIGHTNING/3.png");
    thunder4 = loadImage("LIGHTNING/4.png");

 
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);
      

    if(frameCount % 200 === 0){
      for(i=0;i < maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)))
      }	
	}
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
        
    }
	
	

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    for(i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    
   

    drawSprites();
}   