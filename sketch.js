
function preload() {
    //load the images here
bg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png")
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png")
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600);
tom.addAnimation("t1",cat1);
tom.scale = 0.2;
jerry = createSprite(200,600);
jerry.addAnimation("j1",mouse1);
jerry.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x < tom.width/2-jerry.width/2){
    tom.velocityX = 0;
    tom.addAnimation("t2", cat3);
    tom.x = 300;
    tom.scale = 0.2;
    tom.changeAnimation("t2")
   jerry.addAnimation("j2",mouse3);
   jerry.scale = 0.15;
   jerry.changeAnimation("j2"); 
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("t3",cat2);
    tom.changeAnimation("t3");
    jerry.addAnimation("j3",mouse2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("j3");

}

}
