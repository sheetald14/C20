var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="blue";
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="yellow";
}

function draw() {
  background(0,0,0);
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 ){
    movingRect.shapeColor="red";
    
  }
  else{
    movingRect.shapeColor="blue";
    
  }
  drawSprites();
}