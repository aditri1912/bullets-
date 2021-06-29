var bullet 




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

bullet=createSprite(100,300,100,50)
}

function draw() {
  background(lightblue);  
  drawSprites();
}