var building , buildingImg
var ground,groundImg

function preload () {

  groundImg = loadImage("ground2.png");
  buildingImg  = loadImage("buildings.png");
}

function setup () {
  createCanvas(600,200);
  
  
  

  ground  = createSprite(100,200,50,50)
  ground.addImage("ground",groundImg)
  ground.velocityX = -2
   
}

function draw () {
  
  background ("white");


  console.log(ground.x)
  if (ground.x >-100){
      ground.x  = 100
  }

  spawnBuildings()
   drawSprites()
}
  


function spawnBuildings(){
   if (frameCount % 60 === 0){
  
  building  = createSprite(550,150,50,50)
  building.addImage ("building",buildingImg)
  building.scale = 0.1
  building.velocityX  = -2


  console.log (building.x)
  building.x = Math.min(random(200,600))

 
}


}

