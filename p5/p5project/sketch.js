var rx = 455
var ry = 590
var rw = 40
var rh = 20

function setup() {
 // put setup code here
  createCanvas(2000,1000);
  background('red');
  
  fill(0);
  rect(455,300,500,20);
}

function draw() {
  // put drawing code here


  //square
 
  fill(300);
  circle(600,600,50);
  circle(650,600,50);
  circle(700,600,50);
  circle(750,600,50);
  circle(800,600,50);

  rect(675,248,50,50,20)

  fill(0);
  line(700,320,700,600);
  line(600,320,600,600);
  line(650,320,650,600);
  line(750,320,750,600);
  line(800,320,800,600);


  if(mouseIsPressed){
  if(mouseX > rx && mouseX < rx + rw &&
    mouseY > ry && mouseY < ry + rh){
      rw+=3
      fill('blue')
    }
  }

  rect(rx,ry,rw,rh);
  textSize(15);
  fill(300);
  text("click",460,605);

}




