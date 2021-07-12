var sea;
var ship;
var inviwall1,inviwall2;

function preload(){
seaimage = loadImage("sea.png")
shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(2000,400);
  sea = createSprite(400,200,2000,2000);
  sea.addImage(seaimage);
  sea.scale = 0.3;
  if (sea.x>400){
    sea.x = sea.width/0.2;
  }
  

  ship = createSprite(50,335,40,60);
  ship.addAnimation("ship",shipimage);
  ship.scale = 0.14;

  inviwall1 = createSprite(200,160,2000,10);
  inviwall1.visible = false;

  inviwall2 = createSprite(200,400,2000,10);
  inviwall2.visible = false;

}

function draw() {
  background("white");

  if (sea.x>400){
    sea.x = sea.width/0.2;
  }
  

  console.log(mouseY);
  ship.collide(inviwall1);
  ship.collide(inviwall2);

  if (keyDown("UP")){
    ship.y=ship.y-2;
  }

  if (keyDown("DOWN")){
    ship.y=ship.y+2;
  }

  sea.velocityX = -2;

  drawSprites();
}