var fixedRect, movingRect;
var gameObj1, gameObj2, gameObj3, gameObj4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = 0;

  gameObj1 = createSprite(100,100,50,50);
  gameObj1.shapeColor = "cyan";

  gameObj2 = createSprite(200,100,50,50);
  gameObj2.shapeColor = "cyan";

  gameObj3 = createSprite(300,100,50,50);
  gameObj3.shapeColor = "cyan";

  gameObj4 = createSprite(400,100,50,50);
  gameObj4.shapeColor = "cyan";
  
}

function draw() {
  background("lightblue");  



 

  /*if(isTouching(movingRect, gameObj1)){
    movingRect.shapeColor = 'purple';
    gameObj1.shapeColor = 'purple';
  }
  else {
    movingRect.shapeColor = "red";
    gameObj1.shapeColor = "red";
  }*/
  bounceOff(movingRect,fixedRect);
  drawSprites();

    
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x  < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2){
    
      return true;
  }
  else{
    
    return false;
  }
  
}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x  < object2.width/2 + object1.width/2){

      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    
    if(object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){

        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);

      }
  
}