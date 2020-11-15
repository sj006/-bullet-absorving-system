

var bullet,wall,d,thickness;
var speed,weight;




function setup() {
  createCanvas(2000,400);
  thickness=random(22,83);
  bullet = createSprite(50, 200, 70, 20);
  bullet.shapeColor="white";
  wall = createSprite(1000,200,thickness,200);
  wall.shapeColor="white";
 // wall.debug=true;
 bullet.depth=wall.depth;
  
  speed=random(223,331);
  weight=random(30,52);
  
}

function draw() {
  background("black"); 
  bullet.velocityX=speed;
  if(collided(bullet,wall)){
    bullet.velocityX=0;
    d = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(d<10){

   wall.shapeColor="green";

    }
  if(d>10){

    wall.shapeColor="red";

  }  
  }

  
  drawSprites();
}


function collided(object1,object2){
bulletRightEdge=object1.x+object1.width;
wallLeftEdge=object2.x;
if(bulletRightEdge>=wallLeftEdge ){
  return true;
}
return false;
}



