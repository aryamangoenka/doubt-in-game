var START=0;
var PLAY=1;
var END=2;
var gameState=START;
var bgimg1,bg1;
var playbutton,playimg;
var bg2,bgimg2;
var inviground;
var brokenbuild,brokenimg;
var witch,witchimg;
var heroright,heroleft,heroshield,herogem,herostand,hero;
var invi1,invi2;
var meteor,meteorgrp,meteorimg;
var gem,gemimg,gemgrp;

 
function preload(){
  bgimg1=loadImage('background 1.jpg')
  playimg=loadImage('play button.jpg')
  bgimg2=loadImage('background.jpg')
  brokenimg=loadImage('broken building.jpg')
  witchimg=loadImage('witch-removebg-preview.png')
heroright=loadAnimation('moving_right_hero-removebg-preview.png')
heroleft=loadAnimation('moving_left_hero-removebg-preview.png')
heroshield=loadAnimation('hero_using_shield-removebg-preview.png')
herogem=loadAnimation('hero_taking_gem-removebg-preview.png')
herostand=loadAnimation('standing_hero-removebg-preview.png')
meteorimg=loadImage('meteor_image-removebg-preview.png')
gemimg=loadImage('gem-removebg-preview.png')
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  bg1=createSprite(200,400,1600,1600)
  bg1.addImage(bgimg1)
bg1.scale=2.5
bg2=createSprite(200,400,20,20)
  bg2.addImage(bgimg2)
bg2.scale=2.5
bg2.visible=false;
hero=createSprite(650,630,20,20)
hero.addAnimation("standing",herostand)
hero.addAnimation("movingright",heroright)
hero.addAnimation("movingleft",heroleft)
hero.addAnimation("pickinggem",herogem)
hero.addAnimation("usingshield",heroshield)
hero.scale=0.45
hero.visible=false;

   
meteorgrp=new Group();
gemgrp=new Group();
}
function draw(){
  
background(0)
drawSprites();
if(gameState===START){
  fill('black')
  textSize(30)
  text('AGE OF EXTERMINATION',300,60)
  fill('pink')
  text('STORY',50,155)
  textSize(15)
  fill('blue')
  text('Queen Eliza,the queen of Saturn has her eyes on Earth. She has already destructed several buildings with her supernatural powers.' ,50,205)
  text('The meteors are ruining everything that comes in their path. You are the savier of the planet and now have to tackle the meteors and ',50,230)
  text('gather the gems they emit after exploding.',50,255)
  fill('red')
  textSize(30)
  text('AIM',50,310)
  textSize(15)
  fill('green')
  text('You have to collect 50 gems to save the world.',50,340)
  fill('red')
  textSize(30)
  text('HOW TO PLAY',50,400)
  textSize(15)
  fill('yellow')
  text('[Use the LEFT ARROW to move left]',50,450)
  text('[Use the RIGHT ARROW to move right]',50,480)
  text('[Use the UP ARROW to make shield (NOTE: if you use shield then you will start losing gems)]',50,510)
  text('[Use the DOWN ARROW to collect gems]',50,540)
  fill('white')
  textSize(22)
  text('IF YOU HAVE THE COURAGE TO FIGHT WITH ELIZA,THEN CLICK PLAY OR ELSE RETURN!',17,600)

   playbutton =createSprite(500,665,20,20);
  playbutton.addImage(playimg)
 
  if(mousePressedOver(playbutton)){
    gameState=PLAY;
  }
}

if(gameState=== PLAY){
  
  bg2.visible=true;
   bg2.depth=playbutton.depth+2;
   var inviground=createSprite(480,732,1000,10);
brokenbuild=createSprite(150,506,20,20)
brokenbuild.addImage(brokenimg)
brokenbuild.scale=0.4
brokenbuild.collide=inviground;
witch=createSprite(150,200,20,20)
witch.addImage(witchimg);
witch.scale=0.3
hero.visible=true;
hero.depth=bg2.depth+1;
invi1=createSprite(1000,630,20,20)
invi1.depth=bg2.depth+1
invi1.shapeColor="red"
hero.collide(invi1)
hero.collide(brokenbuild)

if(keyDown("right")){
   hero.changeAnimation("movingright",heroright)
   hero.velocityX=8;
   hero.scale=1.005
   hero.y=620
 }
 if(keyDown("left")){
  hero.changeAnimation("movingleft",heroleft)
   hero.velocityX=-8;
   hero.scale=0.45
   
 }
 if(keyDown("up")){
   hero.changeAnimation("usingshield",heroshield)
   hero.scale=0.4
   hero.velocityX=0
 }
 if(keyDown("down")){
  hero.changeAnimation("pickinggem",herogem)
  hero.velocityX=0;
  hero.scale=0.45
  
 }
 
spawnmeteor();
if(meteorgrp.isTouching(inviground)){
  gem=createSprite(meteor.x,meteor.y,20,20)
  spawngem();
 }
}
}
function spawnmeteor(){
if(frameCount%120===0){
  meteor= createSprite(400, 30, 50, 50);
  meteor.addImage(meteorimg)
  meteor.scale=0.3
  meteor.x=Math.round(random(750,350))
  meteor.velocityY=14;
  meteorgrp.add(meteor)
}
}
function spawngem(){
    
    gem.addImage(gemimg)
    gem.scale=0.3
    gemgrp.add(gem)
  }
  
