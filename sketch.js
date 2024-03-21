let cl1p1 = 40;
let cl1p2 = 40;
let cl2p1 = 290;
let cl2p2 = 300;
let cl1speed = 3;
let cl2speed = 3;
let Larm = -30;
let Lspeed = 1;
let Lh = -30;
let Lhandy = 285;
let Lhandx = 290;
let Lhspeed = 1;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(183,232,255);
  
//Clouds 
  noStroke();
  fill(225);
  ellipse(cl1p1,40,70,50);
  ellipse(cl1p2,60,140,50);
  
  ellipse(cl2p1,20,70,50);
  ellipse(cl2p2,40,140,50);
  
  cl1p1 = cl1p1 + cl1speed;
  cl1p2 = cl1p2 + cl1speed;
  cl2p1 = cl2p1 + cl2speed;
  cl2p2 = cl2p2 + cl2speed;
  
//cloud 1  
  if(cl1p1<=600)
    {
      cl1speed = -cl1speed;
    }
  if(cl1p1 >= cl1p1)
    {
      cl1speed = -cl1speed;
    }
  if(cl1p1<=-200)
    {
      cl1speed = -cl1speed;
     }
  
//cloud 2  
  if(cl2p1<=600)
    {
      cl2speed = -cl2speed;
    }
  if(cl2p1 >= cl2p1)
    {
      cl2speed = -cl2speed;
    }
  if(cl2p1<=-200)
    {
      cl2speed = -cl2speed;
    }

//Eggs
  strokeWeight(2);
  stroke(0);
  fill(254, 153, 0);
  ellipse(60,160,50,70);
  fill(132, 194, 255);
  ellipse(55,145,20);
  fill(188, 255, 132);
  ellipse(75,165,10);
  fill(255, 132, 194)
  ellipse(54,178,15);
  
  fill(119, 240, 72);
  ellipse(330,175,50,70);
  strokeWeight(2);
  fill(255, 132, 216);
  push();
  translate(354,160);
  rotate(radians(90));
  rect(0,0,10,48,9);
  pop();
  fill(255, 132, 216);
  push();
  translate(354,180);
  rotate(radians(90));
  rect(0,0,10,48,9);
  pop();
  
//Floor
  strokeWeight(3);
  stroke(0);
  fill(84,54,11);
  rect(0,320,400,100);
  
//Basket
  fill(232, 138, 62);
  rect(20,290,90,50,10);
  noFill();
  stroke(232, 138, 62);
  strokeWeight(7);
  arc(65,315,90,100,10,100);
  noFill();
  stroke(232, 138, 62);
  strokeWeight(7);
  arc(335,315,90,100,10,100);
  strokeWeight(3);
  stroke(0);
  fill(232, 138, 62);
  rect(20,290,90,50,10);
  line(42.5,290,42.5,340);
  line(65,290,65,340);
  line(87.5,290,87.5,340);
  rect(290,290,90,50,10);
  line(312.5,290,312.5,340);
  line(335,290,335,340);
  line(357.5,290,357.5,340);

//Body
  strokeWeight(3);
  stroke(0);
  fill(237,210,238);
  ellipse(250,290,50,50);
  fill(229,175,230);
  rect(145,200,110,120,40);
  fill(237,210,238);
  ellipse(200,265,70,100);

//Arms
  fill(229,175,230);
  push();
  translate(150,200);
  rotate(radians(30));
  rect(0,0,20,80,60);
  pop();
  
  push();
  translate(245,225);
  rotate(radians(Larm));
  rect(0,0,20,80,60);
  pop();
  
//Larm wave
  Larm = Larm -Lspeed;
  
    if(Larm<=-140)
      {
        Lspeed=-Lspeed;
      }
    if(Larm>=-10)
      {
        Lspeed=-Lspeed;
      }
  
//Left Ears
  push();
  translate(118,50);
  rotate(radians(-25));
  rect(0,0,35,80,60);
  pop();
  fill(237,210,238);
  push();
  translate(125.5,50);
  rotate(radians(-25));
  rect(0,0,20,80,40);
  pop();
  fill(229,175,230);
  push();
  translate(128,35);
  rotate(radians(20));
  rect(0,0,35,80,60);
  pop();
  
//Right Ears
  push();
  translate(245,35);
  rotate(radians(20));
  rect(0,0,35,80,60);
  pop();
  fill(237,210,238);
  push();
  translate(252,40);
  rotate(radians(20));
  rect(0,0,20,75,40);
  pop();
  fill(229,175,230);
  push();
  translate(234,49);
  rotate(radians(-22));
  rect(0,0,35,80,60);
  pop();
  
//Head
  ellipse(200,150,120,120);
  fill(237,210,238);
  ellipse(200,185,80,50);
  fill(229,175,230);
  
//Eyes
  fill(0);
  ellipse(170,140,20,30);
  ellipse(230,140,20,30);
  noStroke();
  fill(225);
  ellipse(229,136,12,20);
  ellipse(169,136,12,20);
  fill(229,175,230);
  strokeWeight(3);
  stroke(0);
  
//Mouth
  fill(255,110,134);
  triangle(190,161,200,170,210,161);
  line(200,170,200,185);
  fill(0);
  triangle(200,185,190,190,210,190);
  fill(229,175,230);
  
//carrot
  fill(254,153,0);
  triangle(205,190,231,190,228,200);
  strokeWeight(2);
  fill(56,195,1);
  triangle(230,195,238,189,236,202);
  
  strokeWeight(1);
  stroke(225);
  
//Whiskers
  line(190,161,150,155);
  line(190,161,155,165);
  line(190,161,160,175);
  line(210,161,250,155);
  line(210,161,245,165);
  line(210,161,240,175);
  
  strokeWeight(3);
  stroke(0);
  
//Hand
  fill(237,210,238);
  
  push();
  translate(245,225);
  rotate(radians(Lh));
  ellipse(12,70,30,30);
  pop();
  
  ellipse(125,265,30,30);
  fill(229,175,230);
  
//Hand Wave
  Lh = Lh - Lhspeed;
  
  if(Lh<=-140)
    {
      Lhspeed=-Lhspeed;
    }
  if(Lh>=-10)
    {
      Lhspeed=-Lhspeed;
    }
  
  
//Legs
  push();
  translate(150,290);
  rotate(radians(20));
  rect(0,0,40,80,60);
  pop();
  push();
  translate(215,300);
  rotate(radians(-15));
  rect(0,0,40,80,65);
  pop();

//Feet
  fill(237,210,238);
  rect(228,350,50,40,60);
  rect(120,350,50,40,60);
  fill(229,175,230);
  line(245,390,245,370);
  line(260,388,260,370);
  line(135,390,135,370);
  line(150,390,150,370);
  
}