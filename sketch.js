let x, y, z;
let xcord, ycord, zcord;
let yup;
let theta;
let hueslider, yslider, speedslider;
let speed;
let step;
let playtoggle;
let hue;
//let scale = ["C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3","A3", "Bb3", "B3"]; //12scales
let scale = ["C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3"];
let playscale;

let t = Tone.Ticks("4n");
let synth = new Tone.MonoSynth({
  "velocity" : 0.001
  }).toMaster();

let chord = new Tone.PolySynth({
  "velocity":1
}).toMaster();
let chordseq1 = new Tone.Sequence(callback,["D3", "G2", "C3", "F2"], "2n");
let chordseq2 = new Tone.Sequence(callback,["F3", "B2", "E3", "A2"], "2n");
let chordseq3 = new Tone.Sequence(callback,["A3", "D3", "G3", "C3"], "2n");
let chordseq4 = new Tone.Sequence(callback,["C4", "F3", "B3", "E3"], "2n");



function callback(time, pitch){
	chord.triggerAttackRelease(pitch, "3n", time, 1);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB,360,100,100);

  hueslider = createSlider(0, 360, 0);
  hueslider.position(10,10);

}


function draw() {
  console.log(t.toTicks());
  hue = hueslider.value();

  step = windowHeight/14;
  for (let i = 0; i<14; i++){
      if (mouseY >= step*i && mouseY < step*(i+1)){
          playscale = scale[13-i];
      }
  }
/*
  step = windowHeight/12;
  for (let i = 0; i<12; i++){
      if (mouseY >= step*i && mouseY < step*(i+1)){
          playscale = scale[11-i];
      }
  }
*/

  if (playtoggle == true){
    if (mouseIsPressed === true) {
      strokeWeight(10);
      stroke(hue, 100, 100);
      line(mouseX, mouseY, pmouseX, pmouseY);
      synth.triggerAttackRelease(playscale, "64n", "+0.01", 0.1);
    }
  }
}



function keyPressed() {
  if (key === " "){
      playtoggle = true; //spacebar for start
      Tone.Transport.start();
      chordseq1.start();
      chordseq2.start();
      chordseq3.start();
      chordseq4.start();
  }
}
