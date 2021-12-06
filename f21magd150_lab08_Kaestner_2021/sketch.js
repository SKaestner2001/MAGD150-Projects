//the img and fnt variables allow for each respective image and font to be uploaded to the program
let img;
let img2;
let fnt;
let fnt2;
let cc = 0;
let c;
var pdf;
var lines;
function setup() {
  createCanvas(500, 700);
  c = color("#FF1400");
  pdf = createPDF();
  pdf.beginRecord();
}

function draw() {
  background("#50544E");
  push();
  img.resize(300, 160);
  img.filter(GRAY);
  image(img, 100, 150);
  pop();
  push();
  tint("#FF6753");
  img2.resize(300, 170);
  image(img2, 100, 350);
  pop();
  push();
  fill(c);
  textFont(fnt);
  textSize(50);
  textAlign(LEFT);
  text(lines[0], 100, 100);
  pop();
  push();
  textSize(30);
  fill(c);
  textAlign(LEFT);
  text(lines[1], 120, 140);
  pop();
  push();
  textFont(fnt2);
  textSize(50);
  textAlign(CENTER);
  fill(c);
  text(lines[2], 250, 560);
  textSize(30);
  text(lines[3], 250, 650);
  text(lines[4], 250, 690);
  pop();
}

//Preload uploads the images, fonts, and strings after their respective variables have been created
function preload() {
  img = loadImage("data/help1.jpg");
  img2 = loadImage("data/help2.jpg");
  fnt = loadFont("data/SourceSansPro-Black.otf");
  fnt2 = loadFont("data/gooddog.otf");
  lines = loadStrings("data/help3.txt");
}

//clicking the mouse changes the color of the text back and forth from bright red to dark red
function mouseClicked() {
  if (cc == 0) {
    c = color("#C03F33");
    cc++;
  } else if (cc == 1) {
    c = color("#FF1400");
    cc = 0;
  }
}

//pressing key S allows the file to be saved as a PDF
function keyPressed() {
  if (keyCode === 83) {
    pdf.save();
  }
}
