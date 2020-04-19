let x, y, z;
let xcord, ycord, zcord;
let yup;
let theta;
let hueslider, yslider, speedslider;
let speed;
let step;
let playtoggle;
let hue;
let scale = ["C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3","A3", "Bb3", "B3"]; //12scales
let playscale;
let synth = new Tone.MonoSynth({
  "velocity" : 0.1
  }
).toMaster();

class Mobject {
  constructor (){

  }

};



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB,360,100,100);

  hueslider = createSlider(0, 360, 0);
  hueslider.position(10,10);

}


function draw() {

  hue = hueslider.value();

  step = windowHeight/12;
  for (let i = 0; i<12; i++){
      if (mouseY >= step*i && mouseY < step*(i+1)){
          playscale = scale[11-i];
      }
  }


  if (playtoggle == true){
    if (mouseIsPressed === true) {
      strokeWeight(10);
      stroke(hue, 100, 100);
      line(mouseX, mouseY, pmouseX, pmouseY);
      synth.triggerAttackRelease(playscale, "8n");
    }
  }
}



function keyPressed() {
  if (key === " "){
      playtoggle = true; //spacebar for start
  }
}
