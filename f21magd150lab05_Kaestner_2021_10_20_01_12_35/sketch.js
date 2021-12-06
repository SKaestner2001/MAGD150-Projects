  var x=170
  var y=420
  var d
  var x1=210
  var y1=410
  var w=60
  var h=25
  var e=0
  var n1
  var n2
  var xd=1
  var yd=1

function setup() {
  createCanvas(600, 600);
  background('#F5B078');
  n1=width/2
  n2=height/2
  
  push();
  stroke('#403329');
  fill('#BD987B');
  rect(125,150,350,300);
  pop();
  
  push();
  noStroke();
  fill(60);
  rect(150,170,300,220,30,30);
  pop();
}

function draw() {
  d=dist(x,y,mouseX,mouseY);
  
  push();
  line(300,150,140,70);
  line(300,150,460,70);
  pop();
  
  push();
   if (d<50){
    fill(110);
  }
  else{
    fill(70);
  }
  
  ellipse(x,y,40);
  pop();
  
  push();
   if(mouseX>x1 && mouseX <x1+w && mouseY>y1 && mouseY <y1+h){
      fill(110);
   }
   else{
    fill(70);
   }
  rect(210,410,60,25);
  pop();
  
  
  push();
  textSize(15);
  fill(255);
  text('PWR',153,425);
  text('Channel',212,427);
  pop();
  
  
  
  if (e==1){
    push();
    noStroke();
    fill('#C8F0FE');
    rect(150,170,300,220,30,30,30); 
    pop();
    push();
    noStroke();
    ellipse(n1,n2,60);
    pop();
  n1+=xd
  n2+=yd;
  if (n1==450-30)
    {
      xd=-1;
    }
  if (n1==150+30)
    {
      xd=1;
    }
  if (n2==390-30)
    {
      yd=-1;
    }
  if (n2==170+30)
    {
      yd=1;
    }
}
  
  
  //circle button for power, change color of screen
  //rectangle button for volume, bring up volume bar
  //idk
  
}
var pwr=0
function mouseClicked(){
  if (d<50){
    if (!pwr){
    push();
    noStroke();
    fill('#C8F0FE');
    rect(150,170,300,220,30,30);
    pwr=1
    pop();
    }
    else{
    push();
    noStroke();
    fill(60);
    rect(150,170,300,220,30,30);
    pwr=0
    e=0
    pop(); 
    }
  }
  else if(mouseX>x1 && mouseX <x1+w && mouseY>y1 && mouseY <y1+h){
    if (pwr)
      e=1
  }
}