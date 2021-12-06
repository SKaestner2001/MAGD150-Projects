var A = [];
var D = 1;
var V = 1;
var B = 0;

function setup() {
  createCanvas(320, 320);
  frameRate(8);
  angleMode(DEGREES);
  A[0]=[5,2,5,1];
  A[1]=[3,3,9,1];
  A[2]=[2,4,11,1];
  A[3]=[2,5,11,1];
  A[4]=[1,6,13,1];
  A[5]=[1,7,13,1];
  A[6]=[1,8,13,1];
  A[7]=[1,9,13,1];
  A[8]=[1,10,13,1];
  A[9]=[2,11,11,1];
  A[10]=[2,12,11,1];
  A[11]=[3,13,9,1];
  A[12]=[5,14,5,1];
}

function draw() {  
  translate(10,-10);
  background(20);
  push();
  noStroke();
  fill('#FFFF01');
  //Scales, translates, and rotates PacMan to orient it properly
  scale(20,20);
  translate(7.5,8.5);
  rotate(B);
  translate(-7.5,-8.5);

//Determines which frame should be drawn
  if (D<0){
    V--;
  }
  else {
    V++;
  }
  if (V<0||V>2){
    V=1;
    D*=-1;
  }
  if (V==0){
    PacF1();
  }
    if (V==1){
    PacF2();
  }
    if (V==2){
    PacF3();
  }
  for (var i=0;i<A.length;i++){
    rect(A[i][0],A[i][1],A[i][2],A[i][3]);
  }
  pop();
}

//Updates Array A length values for each frame of animation
function PacF1(){
  A[0]=[5,2,5,1];
  A[1]=[3,3,9,1];
  A[2]=[2,4,11,1];
  A[3]=[2,5,11,1];
  A[4]=[1,6,13,1];
  A[5]=[1,7,13,1];
  A[6]=[1,8,13,1];
  A[7]=[1,9,13,1];
  A[8]=[1,10,13,1];
  A[9]=[2,11,11,1];
  A[10]=[2,12,11,1];
  A[11]=[3,13,9,1];
  A[12]=[5,14,5,1];
}
function PacF2(){
  A[0]=[5,2,5,1];
  A[1]=[3,3,9,1];
  A[2]=[2,4,11,1];
  A[3]=[2,5,11,1];
  A[4]=[1,6,10,1];
  A[5]=[1,7,7,1];
  A[6]=[1,8,4,1];
  A[7]=[1,9,7,1];
  A[8]=[1,10,10,1];
  A[9]=[2,11,11,1];
  A[10]=[2,12,11,1];
  A[11]=[3,13,9,1];
  A[12]=[5,14,5,1];
}
function PacF3(){
  A[0]=[5,2,5,1];
  A[1]=[3,3,7,1];
  A[2]=[2,4,7,1];
  A[3]=[2,5,6,1];
  A[4]=[1,6,6,1];
  A[5]=[1,7,5,1];
  A[6]=[1,8,4,1];
  A[7]=[1,9,5,1];
  A[8]=[1,10,6,1];
  A[9]=[2,11,6,1];
  A[10]=[2,12,7,1];
  A[11]=[3,13,7,1];
  A[12]=[5,14,5,1];
}

//Determins which direction PacMan faces based on key presses
function keyPressed(){
  if (keyCode===LEFT_ARROW){
     B=180;
  }
  else if (keyCode===RIGHT_ARROW){
     B=0;
  }
  if (keyCode===UP_ARROW){
     B=270;
  }
  else if (keyCode===DOWN_ARROW){
     B=90;
  }
}
