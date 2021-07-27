var r;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);
  
  switch(r){
    case 6: fill("red");
            break;
    case 8: fill("green");
            break;
    case 7: fill("pink");
            break;
    case 9: fill("blue");
            break;
    default: fill("yellow");
            break;                
  }
  rect(50,120,150,200);
  r = Math.round(random(6,12));
  console.log(r);
}