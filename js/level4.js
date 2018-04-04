// ALL THE IMAGES-----------------------
var img = new Image();
img.src = "./images/blue-ocean-water-5412.jpg";

var fishImg = new Image();
fishImg.src = "./images/MainFish.gif";

var coralReefImg = new Image();
coralReefImg.src = "./images/Coralreef.gif";

var inverseCoralReefImg = new Image();
inverseCoralReefImg.src = "./images/coralreefInverse.gif";

var foodFishImg = new Image ();
foodFishImg.src = "./images/fish1.png";

var FemaleImg = new Image();
FemaleImg.src = "./images/Mermaid.png";

var foodFishImg2 = new Image();
foodFishImg2.src = "./images/fish2.png";

var sharkImg = new Image();
sharkImg.src = "./images/Shark.png";

var bubbleImg = new Image();
bubbleImg.src = "./images/bubbles.png";

var crabImg = new Image();
crabImg.src = "./images/crab.png";


//END OF ALL THE IMAGES-----------------------


//MAIN FUNCTION------------------
function Creature (myImg,myX, myY, myW, myH) {
  this.img = myImg;
  this.x = myX;
  this.y = myY;
  this.width = myW;
  this.height = myH;
}

Creature.prototype.drawMe = function () {
  // ctx.fillStyle = "#057e04";
  ctx.drawImage(this.img, this.x, this.y,this.width,this.height);
};

///END OF MAIN FUNCTION---------------------

var canvas = document.querySelector(".first-canvas");
canvas.width = window.innerWidth;
// 37 H1 tag and 4 Border
canvas.height = window.innerHeight-5;

var ctx = canvas.getContext("2d");



//BAKGROUND------------------------

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

var backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  drawMe: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  },
};
//END OF BAKGROUND------------------------



var fish  = {
  x:0,
  y: canvas.height/2,
  width: 110,
  height: 70,
  drawMe: function() {
    ctx.drawImage(fishImg, this.x, this.y, this.width, this.height);
  }
};

// var bubble  = {
//   x:250,
//   y: canvas.height-250,
//   width: 150,
//   height: 250,
//   drawMe: function() {
//     ctx.drawImage(bubbleImg, this.x, this.y, this.width, this.height);
//   }
// };


var allCreatures = [
  new Creature(coralReefImg, 600, canvas.height-200, 200, 200),
  new Creature(coralReefImg, 200, canvas.height-200, 200, 200),
  new Creature(inverseCoralReefImg, 800, 0, 200, 200 ),
  // new Creature(foodFishImg, 400, canvas.height/2, 30, 20),
  // new Creature(),
  // new Creature(FemaleImg, 200, 300, 140, 70 ),
  // new Creature(bubbleImg, 250, canvas.height-250, 150, 250),
  // new Creature(foodFishImg2, 250, 100, 50, 40)
]

var blockOfFish = [
  new Creature(foodFishImg, canvas.width/2, 100, 30, 20),
  new Creature(foodFishImg, canvas.width/2, 120, 30, 20),
  new Creature(foodFishImg, canvas.width/2, 140, 30, 20),
  new Creature(foodFishImg, canvas.width/2, 160, 30, 20), 
  new Creature(foodFishImg, canvas.width/2+40, 80, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 100, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 120, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 140, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 160, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 180, 30, 20),
  new Creature(foodFishImg, canvas.width/2+80, 100, 30, 20),
  new Creature(foodFishImg, canvas.width/2+80, 120, 30, 20),
  new Creature(foodFishImg, canvas.width/2+80, 140, 30, 20),
  new Creature(foodFishImg, canvas.width/2+80, 160, 30, 20),
]

var blockOfFish1 = [
  new Creature(foodFishImg, canvas.width/2, 300, 30, 20),
  new Creature(foodFishImg, canvas.width/2, 320, 30, 20),
  new Creature(foodFishImg, canvas.width/2, 340, 30, 20),
  new Creature(foodFishImg, canvas.width/2, 360, 30, 20), 
  new Creature(foodFishImg, canvas.width/2+40, 280, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 300, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 320, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 340, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 360, 30, 20),
  new Creature(foodFishImg, canvas.width/2+40, 380, 30, 20),
  new Creature(foodFishImg, canvas.width/2+80, 400, 30, 20),
  new Creature(foodFishImg, canvas.width/2+80, 420, 30, 20),
  new Creature(foodFishImg, canvas.width/2+80, 440, 30, 20),
  new Creature(foodFishImg, canvas.width/2+80, 460, 30, 20),
]

var blockOfFish2 = [
  new Creature(foodFishImg2, canvas.width-170, 200, 50, 40),
  new Creature(foodFishImg2, canvas.width-170, 250, 50, 40),
  new Creature(foodFishImg2, canvas.width-110, 150, 50, 40),
  new Creature(foodFishImg2, canvas.width-110, 200, 50, 40),
  new Creature(foodFishImg2, canvas.width-110, 250, 50, 40),
  new Creature(foodFishImg2, canvas.width-110, 300, 50, 40),
]

var blockOfFish22 = [
  new Creature(foodFishImg2, canvas.width-170, 400, 50, 40),
  new Creature(foodFishImg2, canvas.width-170, 450, 50, 40),
  new Creature(foodFishImg2, canvas.width-110, 350, 50, 40),
  new Creature(foodFishImg2, canvas.width-110, 400, 50, 40),
  new Creature(foodFishImg2, canvas.width-110, 450, 50, 40),
  new Creature(foodFishImg2, canvas.width-110, 500, 50, 40),
]

var evilElements = [
  new Creature(sharkImg, 900, 100, 220, 100),
  new Creature(sharkImg, 700, 250, 220, 100),
  new Creature(sharkImg, 700, canvas.height-100, 220, 100)
]

var mermades = [
  new Creature(FemaleImg, 200, 300, 140, 70),
  new Creature(FemaleImg, 800, 600, 140, 70),
  new Creature(FemaleImg, 700, 400, 140, 70)
]

var allBubbles = [
  new Creature(bubbleImg, 250, canvas.height-250, 150, 250),
  new Creature(bubbleImg, 550, canvas.height-250, 150, 250),
  new Creature(bubbleImg, 850, canvas.height-250, 150, 250)
]

var otherElements = [
  new Creature(crabImg, canvas.width, canvas.height-200, 70, 100)
]


// SCORE-----------------------------

var score = 0;

function drawScore() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "#FFF";
  ctx.fillText("Score: "+score, 1100, 30);
}

// END OF SCORE---------------------------

// var healthBarr = 0;

// function healthBar() {
//   ctx.fillStyle = "#057e04";
//   ctx.fillRect(10, 10,150, 30);
// }

// COLISSION----------------------------------

function getTop (obj) {
  return obj.y;
}
function getBottom (obj) {
  return obj.y + obj.height;
}
function getLeft (obj) {
  return obj.x;
}
function getRight (obj) {
  return obj.x + obj.width;
}

function collision (objA, objB) {
  return getBottom(objA) >= getTop(objB)    &&
         getTop(objA)    <= getBottom(objB) &&
         getRight(objA)  >= getLeft(objB)   &&
         getLeft(objA)   <= getRight(objB);
}

function fishCollision () {
  var hasEaten = false;
  var hasCollided = false;

  blockOfFish.forEach(function (oneFish){
    if (collision(fish,oneFish)) {
      hasEaten = true;
      score +=10;
      blockOfFish.splice(blockOfFish.indexOf(oneFish),1);
      // return hasEaten;

    }
  });

  blockOfFish1.forEach(function (oneFish){
    if (collision(fish,oneFish)) {
      hasEaten = true;
      score +=10;
      blockOfFish1.splice(blockOfFish1.indexOf(oneFish),1);
      // return hasEaten;

    }
  });

  blockOfFish2.forEach(function (oneFish){
    if (collision(fish,oneFish)) {
      hasEaten = true;
      score +=10;
      blockOfFish2.splice(blockOfFish2.indexOf(oneFish),1);
      // return hasEaten;

    }
  });

  blockOfFish22.forEach(function (oneFish){
    if (collision(fish,oneFish)) {
      hasEaten = true;
      score +=10;
      blockOfFish22.splice(blockOfFish22.indexOf(oneFish),1);
      // return hasEaten;

    }
  });

  evilElements.forEach(function(oneFish2) {
    if (collision(fish, oneFish2)) {
        hasCollided = true;
        // return hasCollided;
    }

    mermades.forEach(function(merm){
      if(collision(fish,merm)) {
        hasCollided = true;
      }
    })
    
  });
  return {hasEaten, hasCollided}
}

// END OF COLISSION----------------------



function updateCanvas() {
  // backgroundImage.move();

  if (score===400 ){ 
    setTimeout(function(){
      ctx.font = "100px Arial";
      ctx.fillText("Level",430,250);
      ctx.fillText("Completed",310,450);
    },1000*0.5);
    
    setTimeout(function (){
      window.location.href = 'level5.html';
    },1000*3);

    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.drawMe();
  fish.drawMe();
  // bubble.y -=1;
  // bubble.drawMe();
  // coralReef.drawMe();
  // foodFish.drawMe();
  allCreatures.forEach(function (one) {
    // one.x -= 2;
    one.drawMe();
  })

  blockOfFish.forEach(function (fish){
    fish.x-=3;
    fish.drawMe();
    if (fish.x <= -fish.width) {
      fish.x = canvas.width;
    }
  })

  blockOfFish1.forEach(function (fish){
    fish.x-=2;
    fish.drawMe();
    if (fish.x <= -fish.width) {
      fish.x = canvas.width;
    }
  })

  blockOfFish2.forEach(function(fish){
    fish.x -=1.5;
    fish.drawMe();

    if (fish.x <= -fish.width) {
      fish.x = canvas.width;
    }
  })

  blockOfFish22.forEach(function(fish){
    fish.x -=1;
    fish.drawMe();

    if (fish.x <= -fish.width) {
      fish.x = canvas.width;
    }
  })

  evilElements.forEach(function(evil) {
    evil.x-=3;
    evil.drawMe();

    if (evil.x <= -evil.width) {
      evil.x = canvas.width;
    }
  })

  mermades.forEach(function(one) {
    one.y -=3;
    one.x -=3;
    one.drawMe();

    if (one.y <= -one.height) {
      one.x = canvas.width-100;
      one.y = canvas.height;
    }
  });

  allBubbles.forEach(function(one) {
    one.y-=3;
    one.drawMe();

    if (one.y <= -one.height) {
      one.y = canvas.height;
    }
  })

  otherElements.forEach(function(item){
    item.x-=4;
    item.drawMe();
  })

  drawScore();

  // healthBar();

  var result = fishCollision();

  if (result.hasCollided) {
    ctx.font = "100px Arial"
    fillStyle = "black";
    ctx.fillText("Game Over!",300,350);
    return;
  } else {
    drawScore();
  }
    
  // } else {
  //   console.log("Game Over!")
  

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;



var body = document.querySelector("body");
body.onkeydown = (function (){
 
  //  if(pipeCollision()) {
  //    return;
  //  }

  switch (event.keyCode) {

    case 32: //space bar
    case 87: // w Key 
    case 38: //up arrow 
      console.log("Up");
      fish.y -= 15;
      break;


    case 65: // A Key
    case 37: //left arrow
      console.log("left");
      fish.x -= 15;
      break;

    case 83: // S Key
    case 40: // down arrow
      console.log("down");
      fish.y += 15;
      break;

    case 68: // D Key
    case 39: // right arrow
      console.log("right");
      fish.x += 15;
      break;
  }

  // if (celine.x >=1000) {

  // }
  // $("img").css({left: x, bottom: y});
})


// TRIALS----------------------------------------------

// var coralReef = {
//   x:600,
//   y:canvas.height-200,
//   width: 200,
//   height:200,
//   drawMe: function () {
//     ctx.drawImage(coralReefImg, this.x, this.y, this.width, this.height);
//   }
// };

// var foodFish = {
//   x: 400,
//   y: canvas.height/2,
//   width:30,
//   height:20,
//   drawMe: function() {
//     ctx.drawImage(foodFishImg, this.x, this.y, this.width, this.height);
//   }

// };

// var femaleWater = {
//   x: 
//   y:
//   width:
//   height:
//   drawMe: function () {

//   }
// }



// var foodFish2 = {
//   x: 
//   y:
//   width:
//   height:
//   drawMe: function () {

//   }
// }



// var shark = {
//   x: 
//   y:
//   width:
//   height:
//   drawMe: function () {

//   }
// }