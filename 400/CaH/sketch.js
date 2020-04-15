new p5();

let blackCards = [
  {number: 1, text: "This guy being the president, it's like there's a ___ loose in a hospital."},

  {number: 2, text: "blackcard 2"},

  {number: 3, text: "blackcard 3"},

  {number: 4, text: "blackcard 4"},

  {number: 5, text: "blackcard 5"},

]

let whiteCards = [
  {number: 1, text: "Horse."},

  {number: 2, text: "whitecard 2"},

  {number: 3, text: "whitecard 3"},

  {number: 4, text: "whitecard 4"},

  {number: 5, text: "whitecard 5"},

]

var bcard =0;
var wcard =0;

var cardPad = 225;

function setup() {
  createCanvas(displayWidth, displayHeight);
  rectMode(CENTER);
  bcard = int(random(0, 5));
  wcard = int(random(0, 5));
}

function draw() {
  background(220);
  blackCard(150, 200);
  whiteCard(375, 200);
  hand();
}

function blackCard(x, y) {
  stroke(255);
  fill(0);
  rect(x, y, 200, 250);
  fill(255);
  noStroke();
  textSize(20);
  text(blackCards[bcard].text, x+5, y+5, 190, 240);
}

function whiteCard(x, y) {
  stroke(0);
  fill(255);
  rect(x, y, 200, 250);
  fill(0);
  noStroke();
  textSize(20);
  text(whiteCards[wcard].text, x+5, y+5, 190, 240);
}

function hand() {
  for (var h = 0; h < 10; h++) {
    whiteCard(150,400)
  }
}
