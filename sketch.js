var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(1200,800);
  fixedRect =  createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "Green"

  movingRect =  createSprite(800, 400, 80, 30);
  movingRect.shapeColor = "Green"

  gameObject1 =  createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "Green"
  
  gameObject2 =  createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "Green"

  gameobject3 =  createSprite(300, 100, 50, 50);
  gameobject3.shapeColor = "Green"
  
   gameObject4 =  createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "Green"


movingRect.velocityY = -5;
fixedRect.velocityY = +5;
}


function draw() {
  background(0); 
 
  movingRect.x = World.mouseX;
 
  movingRect.y = World.mouseY; 

if(isTouching(movingRect, gameObject1)){

  movingRect.shapeColor = "Blue"
  gameObject1.shapeColor = "Blue"

}

else{
 
  movingRect.shapeColor = "Green"
  gameObject1.shapeColor = "Green"

}

   bounceOff (movingRect, fixedRect)
  drawSprites();
}

