var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;
var y;

function preload() {
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup() {

  createCanvas(600, 600);
  path = createSprite(300, 200, 400, 200);
  path.addImage("rua", pathImg);
  path.velocityY = -5
  path.scale = 1.2;

  boy = createSprite(100, 100, 30, 20);
  boy.addAnimation("corendo", boyImg)
  boy.scale = 0.08;

  //crie um limite à esquerda
  leftBoundary = createSprite(51, 200, 140, 800);
  leftBoundary.visible = false;

  // //crie um limite à direita
  rightBoundary = createSprite(550, 200, 140, 800);
  rightBoundary.visible = false;
}

function draw() {
  background("gray");
  path.velocityY = 4;

  boy.y = World.mouseY;
  boy.x = World.mouseX;

  edges = createEdgeSprites();
  
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // //código para redefinir o fundo
  if (path.y > 400) {
    path.y = height / 2;
   }

  drawSprites();
}
