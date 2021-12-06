var S;
var R = 0;
var ST = 0;
var A = 0;

function preload() {
  data=loadJSON("data.json");
  map1=loadImage('data/ukmap.jpg');
  map2=loadImage('data/germanymap.jpg');
  map3=loadImage('data/egyptmap.jpg');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  S=data.size;
  noStroke();
  ambientLight(100);
  pointLight(150,150,150,0,0,150);
  camera(0,0,365);
}

function draw() {
  background('#AA2621');
  if (A !=0)
    {
      move();
    }
  rotateY(R);
  rotateY(120*-ST);
  for (var m=0; m<3; m++)
    {
      var map;
      switch (m) {
        case 0:
          map = map1;
          break;
        case 1:
          map = map2;
          break;
        case 2:
          map = map3;
          break;
      }
      push();
      rotateY(120*m);
      translate(0,0,(sqrt(3)/2*S)-(S/sqrt(3)))
      texture(map);
      plane(S, S);
      pop();
    }
}

function mouseClicked() {
  move();
}

function move() {
  A +=1;
  R = (cos(A)-1)/2*120;
  
  if (A==180)
    {
      A=0;
      R=0;
      ST++;
      if (ST==3)
        {
          ST=0;
        }
    }
}