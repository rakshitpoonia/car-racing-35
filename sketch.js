var database,canvas,player,form,game;
var gameState=0;
var playerCount;
function setup(){
    canvas=createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.gameState();
    game.start();
}

function draw(){
   
    drawSprites();
}

