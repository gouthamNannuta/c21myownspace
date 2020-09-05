var fixedRect, movingRect,rect,redrect,bluerect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX=-4;
  //fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "white";
movingRect.velocityX=4;
  //movingRect.debug = true;
  rect=createSprite(500,300,65,25);
  rect.shapeColor="pink";
  rect.velocityX=-4;
  redrect=createSprite(700,500,70,40);
  redrect.shapeColor="red";
  bluerect=createSprite(650,450,90,50);
  bluerect.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, bluerect)){
    movingRect.shapeColor = "red";
    bluerect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "white";
    bluerect.shapeColor = "blue";
  }
  if (isTouching(movingRect,rect))
  {
    movingRect.shapeColor = "red";
    rect.shapeColor = "red"; 
  }else{
    movingRect.shapeColor = "white";
    rect.shapeColor = "pink"; 
  }
 bounceoff(movingRect,rect);



  drawSprites();
}


