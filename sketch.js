//Create variables here
var database, game, form, food;

var dogImage,happyDogImage;

var dog;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");

  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);

  database = firebase.database();

  dog = createSprite(400,500);
  dog.addImage(dogImage);
  dog.scale = 0.3;
  
}


function draw() {  
  background(46, 139, 87);

  drawSprites();
  //add styles here

}



