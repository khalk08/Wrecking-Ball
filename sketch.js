const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 

function setup(){
   createCanvas(900,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,600,1500,10);

    box1 = new Box(700,100,70,70)
    box2 = new Box(700,100,70,70)
    box3 = new Box(700,100,70,70)
    box4 = new Box(700,100,70,70)
    box5 = new Box(700,100,70,70)
    box6 = new Box(700,100,70,70)
    box7 = new Box(600,100,70,70)
    box8 = new Box(600,100,70,70)
    box9 = new Box(600,100,70,70)
    box10 = new Box(600,100,70,70)
    box11 = new Box(600,100,70,70)
    box12 = new Box(600,100,70,70)

    ball = new Ball(300,100,100,100)
    rope = new Rope(ball.body,{x: 400, y: 50})
    
}

function draw(){
        background("blue");
        
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ball.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY })
}

