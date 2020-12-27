const Engine = Matter.Engine 
const World = Matter.World   
const Bodies = Matter.Bodies
const Render = Matter.Render

var player
var ball
var track
var ground
var render, engine, world; 
var r1, r2, r3
function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(displayWidth,400);
  ball = new Ball(200,100,30)
  ground = new Ground(width/2,400,width,20)
  ramp = new Ramp(100,100,50,Math.PI * 0.06)
  Matter.Body.setStatic(ramp.body,true)
  World.add(world, [
   r1 = Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.06 }),
   r2 =  Bodies.rectangle(500, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.06 }),
   r3 = Bodies.rectangle(340, 580, 700, 20, { isStatic: true, angle: Math.PI * 0.04 })
]);
}

function draw() {
  background(0); 
  Engine.update(engine)
  ball.display()
  ramp.display()
  ground.display()
  //rectMode(CENTER)
  fill("white")
  rect(r1.position.x, r1.position.y, 700, 20)
  rect(r2.position.x, r2.position.y, 700, 20)
  rect(r3.position.x, r3.position.y, 700, 20)
}
