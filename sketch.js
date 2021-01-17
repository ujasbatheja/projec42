var man, manImage;
var thunder, thunderImage1, thunderImage2, thunderImage3, thunderImage4;
var drops;

function preload(){
    manImage = loadImage("images/Walking Frame/walking_1.png");

    thunderImage1 = loadImage("images/thunderbolt/1.png");
    thunderImage2 = loadImage("images/thunderbolt/2.png");
    thunderImage3 = loadImage("images/thunderbolt/3.png");
    thunderImage4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500,750);
    
    drops = createSprite(250,175,10,10);
    drops.shapeColor="blue";
    drops.velocityY=3;
}

function draw(){
    background("black");

    spawnDrops();

    drawSprites();
}   
function spawnDrops(){
    if(frameCount%5===0){
        drops = createSprite(250,175,10,10);
        drops.x=Math.round(random(0,500));
        drops.y=Math.round(random(0,10));
        drops.shapeColor="blue";
        drops.velocityY=3;
    }
}
function spawnThunder(){
    if(frameCount%10===0){
        thunder = createSprite(100,10);
        thunder.x=Math.round(random(0,500));
        thunder.y=Math.round(random(0,10));
        var rand = Math.round(random(1,6));
        switch(rand){
            case 1: thunder.addImage(thunderImage1);
                    break;
            case 2: thunder.addImage(thunderImage2);
                    break;
            case 3: thunder.addImage(thunderImage3);
                    break;
            case 4: thunder.addImage(thunderImage4);
                    break;
            default: break;
        }
    }
}