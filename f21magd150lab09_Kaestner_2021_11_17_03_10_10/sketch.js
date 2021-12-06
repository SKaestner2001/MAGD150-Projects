//Variable f allows for numbers, and only numbers, to be printed once placed in the draw function. Variable input1 allows for the input box to be created and repositioned within the program after it is created.
var f;
var input1;

function setup() {
  createCanvas(400, 300);
  //The createInput function creates the input box where numbers can be typed and printed   in the console
  input1 = createInput();
  //Everything containing "capture" pertains to the use of the computer's webcam to         display a live feed within the sketch
  capture = createCapture(VIDEO);
  capture.size(400, 240);
  capture.hide();
  let cnv = createCanvas(400, 300);
  //mousePressed allows for the coin sound to play whenever the mouse is clicked within     the sketch
  cnv.mousePressed(playSound);
  reverb = new p5.Reverb();
  soundFile.disconnect();
  reverb.process(soundFile, 5, 3); 
  input1.position(100,300) 
}

function draw() {
  f = input1.value();
  f=parseInt(f)
  if (f){
  print(f);
  }
  background(50);
  image(capture, 40, 0, 320, 240);
   push();
  fill(255);
  textFont(font1);
  textSize(32);
  text('Hello! Type a Number!',85,280)
  pop();
}

//The following variables and functions allow for the sound file to be loaded and played upon clicking the mouse within the sketch.
let soundFile, reverb;
let font1;
function preload() {
  soundFile = loadSound('Details/608431__plasterbrain__shiny-coin-pickup.flac');
  font1 = loadFont('Details/gooddog.otf')
}

function playSound() {
  soundFile.play();
}

//Some pieces of code were referenced and modified from the p5js website