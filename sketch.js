
var bridge, bridgeImg;
var floorOld,floorOldImg,treeOld,treeOldImg;
var dirt,dirtImg;
var driedPlant,driedImg;
var cutTree, cutTreeImg;
var cornerBush, cornerBushImg;
var leaves, leavesImg;
var brokenArbor, brokenArborImg;
var fenceOld, fenceOldImg;
var fenceOld2, fenceOld3;
var dirtyPond,brokenFountain, brokenFountainImg;
var benchOld,benchOldImg;
var tree,treeImg, soil, statue, statueImg;
var plantPot,plantPotImg
var buttonPlay,buttonPlayImg;
var hiplayer,hiplayerImg;
var back2,back2Img;
var flower,flowerImg;
var flower1,flowerImg;
var flower2,flowerImg;
var flower3,flowerImg;
var flower4,flowerImg;
var flower5,flowerImg;
var flower6,flowerImg;
var flower7,flowerImg;
var flower8,flowerImg;
var flower9,flowerImg;
var flower10,flowerImg;
var flower11,flowerImg;
var flower12,flowerImg;
var flower13,flowerImg;
var flower14,flowerImg;
var flower15,flowerImg;
var flower16,flowerImg;
var flower17,flowerImg;
var flower18,flowerImg;
var flower19,flowerImg;
var flower20,flowerImg;
var intro, introImg, codes1,codesImg, play8, play8Img;
var flowero1,floweroI1;
var flowero2,floweroI2;
var sw,swi,dust, dusti;
var rocks, rocksImg;
var next, nextImg;
var hidden, hiddenImg,hid,hidi;

var ball, ball1, ball2, ball3, ball4, ball5;
var hidden1, hiddenImg1;
var next1, next1Img;
var jaricoSound;
var next2,next2I;
var Slide1,slide;
var pink,pinki;
var player;


function preload(){
  floorOldImg  = loadImage("Floor old2 .jpg");
  treeOldImg = loadImage("tree old.png");
  dirtImg = loadImage("dirt.png");
  driedImg = loadImage("dried plant.png");
  cutTreeImg = loadImage("image.png");
  cornerBushImg = loadImage("corner.png");
  leavesImg = loadImage("leaves.png");
  brokenArborImg = loadImage("preview.png");
  fenceOldImg = loadImage("image-.png"); 
  dImg = loadImage("1.png");
  brokenFountainImg = loadImage("y.png");
  benchOldImg = loadImage("bench.png");
  treeImg = loadImage("tree.png");
  bridgeImg = loadImage("br.png");
  soilImg = loadImage("download.png");
  statueImg = loadImage("statue.png");
  plantPotImg = loadImage("pot.png");
  buttonPlayImg = loadImage("button play.png");
  hiplayerImg = loadImage("box.png");
  back2Img = loadImage("back2.jpg");
  flowerImg = loadImage("5.png");
  flower2Img = loadImage("4.png");
  flower3Img = loadImage("2.png");
  flower4Img = loadImage("3.png");
  introImg = loadImage("Intro.png")
  codesImg  = loadImage("code.jpg");
  play8Img  = loadImage("play2.png");
  floweroI1 = loadImage("flower.png");
  floweroI2 = loadImage("died flower.png");
  swi = loadImage("sw.png");
  dusti = loadImage("dust.png");
  rocksImg  = loadImage("rocks.png");
  nextImg  = loadImage("next.png");
  hiddenImg = loadImage("hidden.jpg");
  hidi = loadImage("hid.jpeg");
  ballImg = loadImage("ball.png");
  hiddenImg1 = loadImage("hidden 3.jpg");
  next1Img = loadImage("next.png");
  jaricoSound = loadSound("jarico1.mp3");
  next2I = loadImage("next.gif");
  Slide1 = loadImage("slide 1.png");
  pinki = loadImage("pink.jpg");
}


function setup() {
  createCanvas(displayWidth, 700);
   hid = createSprite(displayWidth/2,50,displayWidth,displayHeight);
  hid.addImage(hidi);
  hid.scale = 1.9;


  hidden = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  hidden.addImage(hiddenImg);
  hidden.scale = 0.8;
 
  ball = createSprite(1400,410,50,50);
  ball.addImage(ballImg);
  ball.scale = 0.6; 

  ball1 = createSprite(80,370,50,50);
  ball1.addImage(ballImg);
  ball1.scale = 0.6; 

  ball2 = createSprite(270,510,50,50);
  ball2.addImage(ballImg);
  ball2.scale = 0.6; 

  ball3 = createSprite(740,270,50,50);
  ball3.addImage(ballImg);
  ball3.scale = 0.6; 

  ball4 = createSprite(1010,190,50,50);
  ball4.addImage(ballImg);
  ball4.scale = 0.6; 
  
  

  next1= createSprite(1470,620,20,20);
  next1.addImage(nextImg);
  next1.scale = 0.5;


  floorOld =createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  floorOld.addImage(floorOldImg);
  floorOld.scale =1.2;
  
  treeOld = createSprite(50,50,50,50)
  treeOld.addImage(treeOldImg);
  treeOld.scale=0.5;
  
  driedPlant = createSprite(900,250,50,50);
  driedPlant.addImage(driedImg);
  driedPlant.scale = 0.2;

  dirt= createSprite(70,100,50,50);
  dirt.addImage(dirtImg);
  dirt.scale=0.5;

  cutTree = createSprite(150,50,50,50);
  cutTree.addImage(cutTreeImg);
  cutTree.scale = 0.6;

  cornerBush = createSprite(200,100,50,50);
  cornerBush.addImage(cornerBushImg);
  cornerBush.scale = 1;
  
  leaves = createSprite(500,90,50,50);
  leaves.addImage(leavesImg);
  leaves.scale = 0.2;

  brokenArbor = createSprite(700,350,100,100);
  brokenArbor.addImage(brokenArborImg);
  brokenArbor.scale = 1.5;

  fenceOld = createSprite(1100,650,100,100);
  fenceOld.addImage(fenceOldImg);
  fenceOld.scale = 1;

  fenceOld2 = createSprite(300,650,100,100);
  fenceOld2.addImage(fenceOldImg);
  fenceOld2.scale = 1;

  fenceOld3 = createSprite(1500,650,100,100);
  fenceOld3.addImage(fenceOldImg);
  fenceOld3.scale = 1;

  dirtyPond = createSprite(800,150,100,100);
  dirtyPond.addImage(dImg);
  dirtyPond.scale =1.9;

  brokenFountain = createSprite(1300,130,100,100);
  brokenFountain.addImage(brokenFountainImg);
  brokenFountain.scale = 1;

  benchOld = createSprite(300,270,50,100);
  benchOld.addImage(benchOldImg);
  benchOld.scale = 1.2;

  tree = createSprite(450,50,20,20);
  tree.addImage(treeImg);
  tree.scale = 1.5;

  bridge = createSprite(900,110,20,20);
  bridge.addImage(bridgeImg);
  bridge.scale = 1.2;

  soil =createSprite(100,400,50,50);
  soil.addImage(soilImg);
  soil.scale = 1;

  statue = createSprite(1150,80,20,20);
  statue.addImage(statueImg);
  statue.scale =0.8;

  
  hiplayer = createSprite(1200,360,30,30);
  hiplayer.addImage(hiplayerImg);
  hiplayer.scale = 0.7;

  buttonPlay = createSprite(1215,440,50,50);
  buttonPlay.addImage(buttonPlayImg);
  buttonPlay.scale = 0.6; 

  intro = createSprite(displayWidth/2,360,displayWidth,displayHeight);
  intro.addImage(introImg);

  play8 = createSprite(1200,660,20,20);
  play8.addImage(play8Img);
  play8.scale = 0.5;
 
  codes1 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  codes1.addImage(codesImg);
  codes1.scale = 2.5;

  flowero1 = createSprite(70,250,20,20);
  flowero1.addImage(floweroI1);
  flowero1.scale = 0.3;

  flowero2 = createSprite(270,520,20,20);
  flowero2.addImage(floweroI2);
  flowero2.scale = 0.5;

  sw = createSprite(1100,200,20,20);
  sw.addImage(swi);
  sw.scale = 0.7;

  dust = createSprite(450,350,20,20);
  dust.addImage(dusti);
  dust.scale = 0.7;

  rocks = createSprite(1370,490,20,20);
  rocks.addImage(rocksImg);
  rocks.scale = 1.5;

  next2 = createSprite(870,620,20,20);
  next2.addImage(next2I);
  next2.scale = 0.5;

  slide = createSprite(displayWidth/2,380,displayWidth,displayHeight);
  slide.addImage(Slide1);
  slide.scale = 0.4;

  pink = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  pink.addImage(pinki);
  pink.scale = 7.2;

 

}

function draw(){
  play3();
  pink.display();
  slide.display();
  next2.display();
  
  


  if(mousePressedOver(ball )){
    score = score +1;;
  }

  if(mousePressedOver(ball1  )){
    score = score +1;;
  }

  if(mousePressedOver(ball2 )){
    score = score +1;;
  }

  if(mousePressedOver(ball3 )){
    score = score +1;;
  }


  if(mousePressedOver(ball4 )){
    score = score +1;;
  }
  


  ball.visible = false;
  ball1.visible = false;
  ball2.visible = false;
  ball3.visible = false;
  ball4.visible =false;


keyPressed();




 if(mousePressedOver(buttonPlay)){
  play3();
 jaricoSound.stop();


}
  
if(mousePressedOver(play8)){
  play2();
  



}
 
if(mousePressedOver(next)){
  play4();
  next.destroy();


}


if(mousePressedOver(next2)){
play0();
jaricoSound.play();
next2.destroy();
slide.destroy();
pink.destroy();

}
 
    

}
function play0(){
  codes1.display();
  intro.display();
  play8.display();

}

function play2() {
  floorOld.display();
  treeOld.display();
  cutTree.display();
  dirt.display();
  cutTree.display();
  cornerBush.display();
  brokenArbor.display();
  fenceOld.display();
  fenceOld2.display();
  fenceOld3.display();
  dirtyPond.display();
  brokenFountain.display();
  bridge.display();
  leaves.display();
  hiplayer.display();
  buttonPlay.display();
  flowero1.display();
  flowero2.display();
  sw.display();
  dust.display();
  rocks.display();
 
  drawSprites();

  textSize(25);
  fill("black");
  text("Hi player", 1150,370);
  stroke("black");
  strokeWeight(4);

 

  intro.destroy();
  codes1.destroy();
  play8.destroy();
  
 
  
}

function play3(){
 

  floorOld.destroy();
  treeOld.destroy();
  cutTree.destroy();
  dirt.destroy();
  cutTree.destroy();
  cornerBush.destroy();
  brokenArbor.destroy();
  fenceOld.destroy();
  fenceOld2.destroy();
  fenceOld3.destroy();
  dirtyPond.destroy();
  brokenFountain.destroy();
  bridge.destroy();
  leaves.destroy();
  hiplayer.destroy();
  buttonPlay.destroy();
  statue.destroy();
  benchOld.destroy();
  tree.destroy();
  soil.destroy();
  driedPlant.destroy();
  flowero1.destroy();
  flowero2.destroy();
  sw.destroy();
  dust.destroy();
  rocks.destroy();
 
 }


 /*function play5(){

 background("blue");

 hidden1.display();
 

  hid.destroy();
  hidden.destroy();
  ball.destroy();
  ball1.destroy();
  ball2.destroy();
  ball3.destroy();
  ball4.destroy();






 }*/


 function keyPressed(){
  if((keyCode === 13)){
  play2();


  

  } }

  
 

  function play4(){
    

    hid.display();
    hidden.display();
    ball.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();

 

    textSize(25);
    fill("pink");
    text("YOU HAVE TO FIND A:TURTLE, HANDMIRROR, 2 KEYS & GIFTS", 150,170);
    stroke("black");
    strokeWeight(4);
  
   
    


    back2.destroy();
    flower.destroy();
    flower1.destroy();
    flower2.destroy();
    flower3.destroy();
    flower4.destroy();
    flower5.destroy();
    flower6.destroy();
    flower7.destroy();
    flower8.destroy();
    flower9.destroy();
    flower10.destroy();
    flower11.destroy();
    flower12.destroy();
    flower13.destroy();
    flower14.destroy();
    flower15.destroy();
    flower16.destroy();
    flower17.destroy();
    flower18.destroy();
    floorOld.destroy();
    treeOld.destroy();
    cutTree.destroy();
    dirt.destroy();
    cutTree.destroy();
    cornerBush.destroy();
    brokenArbor.destroy();
    fenceOld.destroy();
    fenceOld2.destroy();
    fenceOld3.destroy();
    dirtyPond.destroy();
    brokenFountain.destroy();
    bridge.destroy();
    leaves.destroy();
    hiplayer.destroy();
    buttonPlay.destroy();
    statue.destroy();
    benchOld.destroy();
    tree.destroy();
    soil.destroy();
    driedPlant.destroy();
    flowero1.destroy();
    flowero2.destroy();
    sw.destroy();
    dust.destroy();
    rocks.destroy();
   next1.display();
  }

 function play7(){
   
  textSize(25);
  text("Game made by  🎀  𝒜𝓀𝓈𝒽𝒶𝓇𝒶  🎀 ",50,150);
  fill("blue");
  strokeWeight(2);
  stroke("purple");


  }

 