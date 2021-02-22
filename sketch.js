//Create variables here
var dog,happyDog,database;
var foodS,foodStock;
function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png")
  happyDogimage=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(250,250);
  dog.addImage(dogImage);
  dog.scale=0.5;
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  fill("Cyan");
background(46,139,87);
if(keyIsDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogimage);
}
else{
  dog.addImage(dogImage);
}
  drawSprites();
  //add styles here
text("Remaining Food:"+ foodS,150,100)
text("Press UP Arrow to feed your pet!",150,50)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    Food:x
  })
}


