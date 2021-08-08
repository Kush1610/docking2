var bgImg;
var hasDocked=false;
var Start=0; 
var Play=1;
var End=2;
var time=0;
var gameState=Start

function preload(){
bgImg= loadImage("spacebg.jpg");
bg2Img= loadImage("bg.jpg");
ebgImg= loadImage("ebg.JPG");

IssImage= loadImage("iss.png");
spacecraft1Img= loadImage("spacecraft1.png");
spacecraft2Img= loadImage("spacecraft2.png");
spacecraft3Img= loadImage("spacecraft3.png");
spacecraft4Img= loadImage("spacecraft4.png");

PlaybImg= loadImage("play.png");
insbImg= loadImage("how2.png");
resImg= loadImage("Restart.png");
crossbImg= loadImage("cross.png");
insImg= loadImage("ins.png");

marsImg= loadAnimation("mars/P-0.png","mars/P-2.png","mars/P-4.png","mars/P-6.png","mars/P-8.png","mars/P-10.png","mars/P-12.png","mars/P-14.png","mars/P-16.png","mars/P-18.png");
star2Img= loadAnimation("star2/L-0.png","star2/L-1.png","star2/L-2.png")
earthImg= loadAnimation("earth/1-0.png","earth/1-0.png","earth/1-0.png","earth/1-3.png","earth/1-3.png","earth/1-3.png","earth/1-4.png","earth/1-4.png","earth/1-4.png","earth/1-5.png","earth/1-5.png","earth/1-5.png","earth/1-7.png","earth/1-7.png","earth/1-7.png","earth/1-9.png","earth/1-9.png","earth/1-9.png")
jupImg= loadAnimation("jupiter/d-0.png","jupiter/d-1.png","jupiter/d-2.png","jupiter/d-3.png","jupiter/d-4.png","jupiter/d-5.png","jupiter/d-6.png","jupiter/d-7.png","jupiter/d-8.png")
astbeltImg= loadImage("astbelt2.png");
holoImg= loadImage("holo.png");
astrImg= loadImage("astr.png");
astr2Img= loadImage("astr2.png");
}


function setup() {  

  createCanvas(1400,700);

  mars = createSprite(1150,390, 50, 50);
  mars.addAnimation("mars",marsImg);
  mars.scale=0.5

  astbelt = createSprite(1200,250, 50, 50);
  astbelt.addAnimation("astbelt",astbeltImg);
  //astbelt2 = createSprite(1100,100, 50, 50);
  //astbelt2.addAnimation("astbelt",astbeltImg);
  astbelt.scale=1.5
  //astbelt2.scale=0.7
  earth = createSprite(700,930, 50, 50);
  earth.addAnimation("earth",earthImg);
  earth.scale=1.4

  jupiter = createSprite(1350,120, 50, 50);
  jupiter.addAnimation("jupiter",jupImg);
  jupiter.scale=1

  star = createSprite(100,50, 50, 50);
  star.addAnimation("Iss",star2Img);
  star.scale=0.1
  star2 = createSprite(250,250, 50, 50);
  star2.addAnimation("Iss",star2Img);
  star2.scale=0.1
  star3 = createSprite(1300,650, 50, 50);
  star3.addAnimation("Iss",star2Img);
  star3.scale=0.1
  star4 = createSprite(300,50, 50, 50);
  star4.addAnimation("Iss",star2Img);
  star4.scale=0.1
  star5 = createSprite(1100,500, 50, 50);
  star5.addAnimation("Iss",star2Img);
  star5.scale=0.1
  star6 = createSprite(550,10, 50, 50);
  star6.addAnimation("Iss",star2Img);
  star6.scale=0.1
  star7 = createSprite(100,550, 50, 50);
  star7.addAnimation("Iss",star2Img);
  star7.scale=0.1
  star8 = createSprite(400,450, 50, 50);
  star8.addAnimation("Iss",star2Img);
  star8.scale=0.1
  star9 = createSprite(1000,50, 50, 50);
  star9.addAnimation("Iss",star2Img);
  star9.scale=0.1

  spacecraft1= createSprite(700,500, 50, 50);
  spacecraft1.addImage(spacecraft1Img);
  spacecraft1.scale=0.2
  spacecraft1.setCollider("rectangle",0,0,320,430);
  spacecraft1.visible=false

  iss = createSprite(700,250, 50, 50);
  iss.addImage("Iss",IssImage);
  iss.visible=false

  playb = createSprite(700,350, 50, 50);
  playb.addImage("Iss",PlaybImg);
  playb.scale=0.35

  ins = createSprite(700,450, 50, 50);
  ins.addImage("Iss",insbImg);
  ins.scale=0.7

  square2= createSprite(700,220, 700, 500);
  square2.shapeColor ="red";
  square2.scale=0.95
  square= createSprite(700,225, 700, 480);
  square.shapeColor ="skyblue";
  square.scale=0.9

  holo = createSprite(700,400, 50, 50);
  holo.addAnimation("holo",holoImg);
  holo.scale=1.3
  holo.visible=false
  square.visible=false

  resb = createSprite(700,400, 50, 50);
  resb.addImage("res",resImg);
  resb.scale=0.35

  astr = createSprite(1200,350, 50, 50);
  astr.addImage("astr",astrImg);
  astr.visible=false

  astr2 = createSprite(200,350, 50, 50);
  astr2.addImage("astr2",astr2Img);
  astr2.visible=false

  insi = createSprite(700,350, 50, 50);
  insi.addImage("insi",insImg);
  insi.scale=1.4
  insi.visible=false

  cross = createSprite(280,70, 50, 50);
  cross.addImage("cross",crossbImg);
  cross.scale=0.14
  cross.visible=false
}

function draw() {
  resb.visible=false
  if(gameState===Start)
  {
    background(bg2Img); 
    invi();
    holo.visible=false
    square.visible=false
    square2.visible=false
    playb.visible=true
    ins.visible=true
    astr.visible=false
    astr2.visible=false
    drawSprites()
    textSize(77);
    fill("white");
    textFont("Algerian");
    text("Docking mission",400,200);


    if(mousePressedOver(playb))
    {
      gameState=Play
      spacecraft1.x=700;
      spacecraft1.y=500;
      hasDocked=false
    }

    if(mousePressedOver(ins))
    {
      insi.visible=true
      cross.visible=true
    }

    if(mousePressedOver(cross))
    {
      insi.visible=false
      cross.visible=false
    }

      playb.visible=false;
      ins.visible=false;

      iss.visible=true;
      spacecraft1.visible=true;
    }

  if(gameState===Play) 
  {
  background(bgImg);  
  spacecraft1.addImage(spacecraft1Img);
  visi();
  playb.visible=false
  ins.visible=false
  insi.visible=false
  cross.visible=false
if(keyDown("UP_ARROW"))
{
  spacecraft1.y=spacecraft1.y-1
  spacecraft1.addImage(spacecraft2Img);
}

if((keyDown("DOWN_ARROW"))&&(spacecraft1.y<501))
{
  spacecraft1.y=spacecraft1.y+1
}

if(keyDown("LEFT_ARROW"))
{
  spacecraft1.x=spacecraft1.x-1
  spacecraft1.addImage(spacecraft4Img);
}

if(keyDown("RIGHT_ARROW"))
{
  spacecraft1.x=spacecraft1.x+1
  spacecraft1.addImage(spacecraft3Img);
}

drawSprites();

if((spacecraft1.y===326)&&(spacecraft1.x===628))
{
  hasDocked=true

  spacecraft1.changeAnimation("normal", spacecraft1Img);
}
if(hasDocked===true)
{
  gameState=End
  spacecraft1.changeAnimation("normal", spacecraft1Img);
}

  }
  if(gameState===End)
  {
    spacecraft1.changeAnimation("normal", spacecraft1Img);
    background(ebgImg)
    invi();
    time=time+1
    console.log(time)
    playb.visible=false
    ins.visible=false
    holo.visible=true
    astr.visible=true
    astr2.visible=true
    drawSprites();

if((time>30)&&(time<50))
{
  resb.visible=true
  square.visible=true
  square2.visible=true

  drawSprites();

  textSize(60);
  fill("white");
  textFont("Algerian");
  text("Docking Successful",400,70);
  textFont("freestyle script");
  text("You have successfully docked the",400,200)
  text("spacecraft and helped the astronauts",400,240)
  text("reach ISS.",400,290);
}

if((time>50)&&(time<70))
{
  resb.visible=false
  square.visible=false
  square2.visible=false
drawSprites()
}
if(time>70)
{
  resb.visible=true
  square.visible=true
  square2.visible=true

  drawSprites();

  textSize(60);
  fill("white");
  textFont("Algerian");
  text("Docking Successful",400,70);
  textFont("freestyle script");
  text("You have successfully docked the",400,200)
  text("spacecraft and helped the astronauts",400,240)
  text("reach ISS.",400,290);
}

console.log(square.visible)
    if(mousePressedOver(resb))
    {
      gameState=Start
      hasDocked=false
      time=0
    }

  }
}

function invi()
{
  mars.visible=false
  astbelt.visible=false
  earth.visible=false
  jupiter.visible=false
  star.visible=false
  star2.visible=false
  star3.visible=false
  star4.visible=false
  star5.visible=false
  star6.visible=false
  star7.visible=false
  star8.visible=false
  star9.visible=false
  spacecraft1.visible=false
  iss.visible=false

}

function visi()
{
  mars.visible=true
  astbelt.visible=true
  earth.visible=true
  jupiter.visible=true
  star.visible=true
  star2.visible=true
  star3.visible=true
  star4.visible=true
  star5.visible=true
  star6.visible=true
  star7.visible=true
  star8.visible=true
  star9.visible=true
  spacecraft1.visible=true
  iss.visible=true
  playb.visible=true
  ins.visible=true
}
