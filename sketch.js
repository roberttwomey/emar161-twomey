// from Gretchen Larsen
// ok I'm making some changes.

let img0, img1, img2, img3, img4, img5;

let state = 0;
let typed = "";

function preload() {
  img0 = loadImage("data/0.jpg");
  img1 = loadImage("data/1.jpg");
  img2 = loadImage("data/2.jpg");
  img3 = loadImage("data/3.jpg");
  img4 = loadImage("data/4.gif");
  img5 = loadImage("data/5.jpg");
}

function setup() {
  createCanvas(400, 400);
  textSize(24);
}

function draw() {
  background(220);

  if (state == 0) {
    image(img0, 0, 0);
    img0.resize(width, 0);
  } else if (state == 1) {
    image(img1, 0, 0);
    img1.resize(width, 0);
  } else if (state == 2) {
    image(img2, 0, 0);
    img2.resize(width, 0);
  } else if (state == 3) {
    image(img3, 0, 0);
    img3.resize(width, 0);
  } else if (state == 4) {
    image(img4, 0, 0);
    img4.resize(width, 0);
  } else if (state == 5) {
    image(img5, 0, 0);
    img5.resize(width, 0);
  }

  text(typed, 0, 200);
}

function keyTyped() {
  if (key == '0') {
    state = 0;
  } else if (key == '1') {
    state = 1;
  } else if (key == '2') {
    state = 2;
  } else if (key == '3') {
    state = 3;
  } else if (key == '4') {
    state = 4;
  } else if (key == '5') {
    state = 5;
  } else if (keyCode == RETURN) {
    if (typed == 'happy') {
      state = 0;
      typed = "";
    } else if (typed == 'desire') {
      state = 1;
      typed = "";
    } else if (typed == 'trade') {
      state = 2;
      typed = "";
    } else if (typed == 'meet') {
      state = 3;
      typed = "";
    } else if (typed == 'dance') {
      state = 4;
      typed = "";
    } else if (typed == 'end') {
      state = 5;
      typed = "";
    }
  } else {
    typed += key;
  }
}

function keyPressed() {
  if(keyCode == BACKSPACE) {
    typed = "";
  }
}