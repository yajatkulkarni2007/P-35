//Create variables here
var dog,happyDog,database,foodS,foodStock,dI,dHI; 

function preload()
{
  //load images here
  dI=loadImage(dogImg.png);
  dHI=loadImage(dogImg1.png);
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.addImage("Img",dI);
  happyDog=createSprite(250,250);
  happyDog.addImage("Img",dHI);
  foodStock=createSprite(250,300);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  happyDog.addImage("Img",dHI);
}
  drawSprites();
  //add styles here

}
function readStock(){
foodS=data.val();
}

function writeStock(){
database.ref('/')/update({
  food:x
})
}
