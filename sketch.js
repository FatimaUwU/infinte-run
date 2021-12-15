var angeldevil, leftBoundary, rightBoundary
var backround

function preload(){ 
 angeldevil = loadImage("angel devil.png")
 backround = loadImage("Path.jpg")

}

function setup() {
    
 createCanvas(400, 400);

 //moving backround
 backround=createSprite(200, 200)
 backround.addImage(backround)
 backround.velocityY = 4;
 backround.scale=1.2;

 //add image
angeldevil = createSprite(180,340,30,30);
angeldevil.scale=0.08
angeldevil.addAnimation("angel devil.png")

leftBoundary=createSprite(0,0,100,800)

leftBoundary.visible= false;




 
}

function draw() {
 background(0);
 background.velocityY = 4;

 angeldevil.x = World.mouseX;

edges= createEdgeSprites();

}