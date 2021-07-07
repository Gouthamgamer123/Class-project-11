var ship , ship_running,edges;
var groundImage;

function preload(){
ship_running =loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
groundImage = loadImage("sea.png");
}


function setup(){
  createCanvas(2000,700);

ground = createSprite(200,200,5,5);
ground.addImage("ground" , groundImage);
ground.x=ground.width/2;

  ship = createSprite(1000,700,20,20);
  ship.addAnimation("runnig",ship_running);
  edges =  createEdgeSprites();

ship.scale = 0.5;
ship.x = 1000;


}

function draw() {
  background("blue");
 
  ground.velocityX= -4;
 

 if(ground.x<0){
  ground.x=ground.width/2;
}

 console.log(ground.x);

  console.log(ship.y);

ship.velocityY = ship.velocityY + 0.5;



ship.collide(edges[3])

drawSprites();
}