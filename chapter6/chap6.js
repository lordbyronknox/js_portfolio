var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm")
 
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", fistPump);


function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.top = top + '%';    
    top++;
    if (top === 20){
      clearInterval(id);
    }
  }
  
}


function moveRightLeft(e) {
  var robotPart = e.target;
  var right = 0;

  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.right = left + '%';
    right++;
    if (left === 70){
      clearInterval(id);
    }
  }
}

function fistPump(e) {
    var robotPart = e.target;
    var top = 0;
  
    var id = setInterval(frame, 60) // draw every 10ms
  
    function frame() {
      robotPart.style.top = top + '%';    
      top++;
      if (top === 36){
        clearInterval(id);
      }
    }
    
  }

  var a = "leg"
  