var player;
var ball;
var goal;
var enemy;
var enemy2;



function setup() {
  createCanvas(400, 700);
  
  player = createSprite(200, 400, 50, 50);
  var playerImage = loadImage("http://examples.phaser.io/assets/sprites/wabbit.png");
  player.addImage(playerImage);
  
  enemy = createSprite(200, 350, 32, 32); 
   var enemyImage = 
  loadImage("http://examples.phaser.io/assets/sprites/onion.png");

  enemy.addImage(enemyImage);
  
  enemy2 = createSprite(100, 350, 32, 32); 
   var enemy2Image = 
  loadImage("http://examples.phaser.io/assets/sprites/onion.png");

  enemy2.addImage(enemy2Image);
  
  enemy3 = createSprite(100, 350, 32, 32); 
  var enemy3Image = 
  loadImage("http://examples.phaser.io/assets/sprites/onion.png");

  enemy3.addImage(enemy3Image);
  
  ball = createSprite(200, 500, 25, 25);
    var ballImage = 
   loadImage("http://examples.phaser.io/assets/sprites/orb-blue.png");
  ball.addImage(ballImage);


  goal = createSprite(200, 50, 100, 25);
     var goalImage = 
   loadImage("http://examples.phaser.io/assets/sprites/master.png");
 goal.addImage(goalImage);

}
 
function draw() {
  background(55, 100, 220);
  drawSprites();
  
  player.position.x = mouseX;
  player.position.y = mouseY;
  
  ball.bounce(player);
  
  enemy.position.y = enemy.position.y +=18;
 
  enemy2.position.y = enemy2.position.y +=18;
  
  enemy3.position.y = enemy3.position.y +=18;

  if (player.overlap(enemy)){
    window.alert("game over");
  }
  
  if(ball.overlap(goal)) {
    ball.remove();
    }
  if(player.overlap(enemy)) {
    player.remove();  
  }

  if (player.overlap(enemy2)) {
    player.remove();
  }

    if (enemy.position.y > 700) {
    enemy.position.y = 0;
    enemy.position.x = random(300);
  }
  
    if (enemy2.position.y > 700) {
    enemy2.position.y = 0;
    enemy2.position.x = random(300);
  }
  
    if (enemy3.position.y > 700) {
    enemy3.position.y = 0;
    enemy3.position.x = random(300);
  }


  fill(0);
  text("Young Wabbit",10 ,280);
  text("Young Wabbit,",10 ,280);
  text("Bring the crystal ball to the master",10,300);
   text("Bring the crystal ball to the master",10,300);
  text("But Beware",10 ,325);
    text("But Beware",10 ,325);
  text("The sky is Falling!",10 ,350);
  text("The sky is Falling!",10 ,350);
  text("Use your mouse to control the wabbit and refresh the page when you ",10 ,550); 
  text("get hit or get the ball to the master",10 ,570); 
}
