const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var division=[]
var plinko=[]
var particles=[];
var score=0
var particle;
var gameState="play"
var count=0

var engine,world;

function setup() {
  createCanvas(480,800);
  engine= Engine.create()
  world= engine.world;
  ground=new Ground(240,780,480,20);

  for(var i=5;i<width;i=i+78){
    division.push(new Division(i,600,10,340));
  }
  for(var i=40;i<=width;i=i+50)
{
  plinko.push(new Plinko(i,75));
}
for(var i=15;i<=width-10; i=i+50)
{
  plinko.push(new Plinko(i,175));
}
for(var i=40;i<=width;i=i+50)
{
  plinko.push(new Plinko(i,275));
}
for(var i=15;i<=width-10; i=i+50)
{
  plinko.push(new Plinko(i,375));
}
}
function draw() {
  background(0);
  Engine.update(engine)
  ground.display()
  
  /*if(frameCount%20===0){
    particles.push(new Particle(random(10,470),0));
  }
for(var i=0;i<particles.length;i++){
  particles[i].display();
}*/
for(var i=0;i<division.length;i++){
  division[i].display();
}
for(var i=0;i<plinko.length;i++){
  plinko[i].display();
}
if(particle!=null)
{
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  for(var i=0;i<particles.length;i++){
    if(particles[i].body.position.y>500&& particles[i].body.position.y<505){
        if(particles[i].body.position.x<80){
            score=score+500
        }
        else if(particles[i].body.position.x>80 && particles[i].body.position.x<160){
          score=score+500
        }
        else if(particles[i].body.position.x>160 && particles[i].body.position.x<240){
          score=score+100
        }
        else if(particles[i].body.position.x>240 && particles[i].body.position.x<320){
          score=score+100
        }
        else if(particles[i].body.position.x>320 && particles[i].body.position.x<400){
          score=score+200
        }
        else if(particles[i].body.position.x>400){
          score=score+200
        }
            particle[i]=null;
            if(count>=5)gameState="end";
      
    }
    
  }
}
textSize(25)
text("Score: "+score,20,20)
text("500",25,500)
text("500",100,500)
text("100",180,500)
text("100",260,500)
text("200",340,500)
text("200",420,500)
if(gameState=="end"){

  textSize(50)
  text("Game Over",200,400)
}
}

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle(mouseX,10,10,10);
    particles.push(particle);
  }
}