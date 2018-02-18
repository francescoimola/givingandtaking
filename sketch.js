let checkbox = [];
let centerwidth = innerWidth / 2;
let centerheight = innerHeight / 2;
let fr = 120;
let animY0 = 0;
let animY1 = innerHeight;
let isOn = false;

function setup() {
  noCanvas();
  frameRate(fr);
  Checkboxes();
}

function Checkboxes() {
  for (var i = 0; i <= 1 ; i++) {
    checkbox[i] = createCheckbox();
  }
}

function draw() {
  let velocity = 2;
  let speed0 = velocity;
  let speed1 = velocity;

  checkbox[0].position (centerwidth - 20, animY0);
  checkbox[1].position (centerwidth + 20, animY1);

  animY0 += speed0;
  animY1 -= speed1;

  if (animY0 > innerHeight) {
    animY0 = 0;
  }

  if (animY1 < 0) {
    animY1 = innerHeight;
  }

  if (animY0 == animY1) {
  isOn = Check();
  } 
}

 function Check() {
   if (isOn) {
     Uncheck();
   }
   else {
    checkbox[0].checked(true);
    checkbox[1].checked(true);
    return true;
   }
  }

  function Uncheck() {
    checkbox[0].checked(false);
    checkbox[1].checked(false);
    return false;
  }