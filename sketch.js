const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground, ball, sheet,treasure;
var backgroundImg, backgroundImg2;
var PC1, PC2;
var PCA1; PCB1, PCA2, PCB2;
var ninHouse;
var Img;
var beeper;
var STEP1 = 1;
var STEP2 = 2;
var STEP3 = 3;
var STEP4 = 4;
var STEP5 = 5
var STEP6 = 6;
var STEP7 = 7;
var gameState = STEP1;

function preload(){
  
  backgroundImg = loadImage("Images/Mansion.png");
  Img = loadAnimation("Images/Walking.png");
  //backgroundImg2 = loadImage("Images/InsideHouse.png");
 // PC1 = loadImage("Images/RichMan.png");

}

function setup() {
  createCanvas(1215,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(120,380,1000,50,option);
   World.add(world,ground);
  
  PC1 = new FirstAppearance();
  sheet = new Note(300,125,32,40);
  beeper = new Faller();
  //treasure = new Treasure(100,255);
 PCA1 = new SecondAppearance();
 PCB1 = new ThirdAppearance();
  ninHouse = new Ninja4(650,255,150,200);
  PC2 = new Detective();
 
  
   
   
   

 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  console.log(ground)
 
  drawSprites();
  //"What's this? a note.`leave the door open when you go to sleep, I have to pick up my clothes from your house`-Mom"
  if(gameState === STEP1){
   
    PC1.display();
    fill("black")
    textSize(20)
    text("What's this? a note.`leave the door open when you go to sleep, I have to pick up my clothes from your house`-Mom", 200, 100);
    
   // sheet = new Note();
    //sheet.display();
  if(keyCode === 32){
gameState = STEP2;
    //beeper.display();
  //  if(beeper.height < ground.height / 2 &&
    //  ground.height < beeper / 2 &&
      //beeper.width < ground.width / 2 &&
      //ground.width < beeper / 2){
        //gameState = STEP2;
      //}
  }
  
}

  if(gameState === STEP2){
        backgroundImg = loadImage("Images/InsideHouse.png");
        PCA1.display();
        PC1.visible = false;

      // treasure = new Treasure(100,255);
      // treasure.display();
       
        sheet = loadImage("Images/NothingNess.png");
        
       
    PC1.velocityX = 3;
    if(PC1.x >= 600){
      PC1.velocityX = 0;
      if(frameCount % 700 === 0){
        backgroundImg = loadImage("Images/drsw.png");
        var Cont = createElement(`h2`, "Next Morning...");
        Cont.position(400,200);
      }
      if(frameCount === 122){
        gameState = STEP3;
      }
    }
    text("Now to unlock the door like mom said",200, 300);
  }
     if(gameState === STEP3){
       backgroundImg = loadImage("Images/Mansion.png");
      // ninHouse = new Ninja4(650,255,150,200);
       ninHouse.display();
       PC1.visible = false;
       PCA1.visible = false;
       var thief = createElement(`h2`, "What a fool, he actually fell for the note trick, now breaking in will be easy");
       thief.position(displayWidth / 2, 300);
       if(frameCount === 110){
         gameState = STEP4;
       }
     } 
     if(gameState === STEP4){
       backgroundImg = loadImage("Images/InsideHouse.png");
       PCB1.display();
       PCA1.visible = false;
       PC1.visible = false;
       ninHouse.visible = false;
       var stolen1 = createElement(`h2`, "WHERE IS MY GOLDDDDDDDDDD");
       stolen1.position(displayWidth / 2, 200);
      if(keyCode === 102){
        gameState = STEP5;
      }

     }
     if(gameState === STEP5){
       backgroundImg = loadImage("Images/Detective.png");
       PC2.display();
       PC1.display();
       PCB1.visble = false;
       PCA1.visible = false;
       ninHouse.visible = false;
       //if(frameCount % 300 === 0){
        // gameState = STEP6;
       //}
     }
 
      // if(frameCount % 80 === 0){
       //  PC1 = new SecondAppearance();
       //PC1.velocityX = 3;
        // if(PC1.x >= 600){
         //  PC1.velocityX = 0;
         

       }
       // }
   // }
 // }
