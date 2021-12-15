var mouse;
var cat;
var mouseImg;
var catImg;
var cat_moving;
var bg;
var backgroundImage;
var catsitting;
var mousemagnify

function preload() {
  catImg = loadAnimation("images/cat1.png");
  cat_moving = loadAnimation("images/cat2.png", "images/cat3.png");
  catsitting = loadAnimation("images/cat4.png");
  mouseImg = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png"); 
  backgroundImage = loadImage("images/garden.png");
  mousemagnify = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(1000/2, 800/2, 1000, 800);
    bg.addAnimation("background", backgroundImage); 

    cat = createSprite(870,600)
    cat.addAnimation("catlaying", catImg);
    cat.addAnimation("movingcat", cat_moving);
    cat.addAnimation("sittingcat", catsitting)
    cat.scale = 0.2;

    mouse = createSprite(100, 600)
    mouse.addAnimation("mousestanding", mouseImg);
    mouse.addAnimation("mousemagnify", mousemagnify);
    mouse.frameDelay = 50;
    mouse.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    cat.setCollider("rectangle",0,0,cat.width,cat.height);
    mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
    
    if(mouse.isTouching(cat)){
        END();
        
    
    }
    drawSprites();
}

function END() {
    cat.changeAnimation("sittingcat", catsitting)
    cat.velocityX = 0;
    mouse.changeAnimation("mousemagnify", mousemagnify);

}

function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
    cat.velocityX = -4;
    cat.changeAnimation("movingcat", cat_moving);
}

}
