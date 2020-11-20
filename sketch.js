var obj1, obj2;



function setup() {
 createCanvas(600,600);
 obj1 = createSprite(300,200,50,50);
 obj2 = createSprite(100,300,50,50);

 obj1.shapeColor = "blue";
 obj2.shapeColor = "red";

 obj1.debug = true;
 obj2.debug = true;
}
function draw() {
  background(0);
 obj2.x = mouseX;
 obj2.y = mouseY;


 
  drawSprites();
}