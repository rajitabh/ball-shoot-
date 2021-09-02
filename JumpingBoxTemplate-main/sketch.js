var canvas;
var music;
var block1;
var block2;
var ball;
var edge;
var block3;
var block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
     block1=createSprite(0,580,360,30)
     block1.shapeColor=rgb(255,128,0)
     block2=createSprite(295,580,200,30)
     block2.shapeColor=rgb(153,0,76)
     block3=createSprite(515,580,200,30)
     block3.shapeColor=rgb(0,100,0)
     block4=createSprite(740,580,220,30)
     block4.shapeColor=rgb(0,0,255)
     ball=createSprite(random(20,750),100,40,40);
     ball.shapeColor=rgb(255,255,255)
     ball.velocityX=10
     ball.velocityY=20
    
}

function draw() {
    background("red");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if (ball.isTouching(block1)|| ball.isTouching(block2)||ball.isTouching(block3)||ball.isTouching(block4)) {
      ball.shapeColor="black"
    }

   drawSprites();
    






    //add condition to check if box touching surface and make it box
}
