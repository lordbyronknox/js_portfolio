var trainSpeed = 50;
var trainPosition = 0;
var animation;

//var train = document.getElementById("train");
//train.addEventListener("click", speedUp);

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 950) {
        alert(":O!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 960) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}




setInterval(displayTime(), 1000)


function displayTime(){
    document.getElementById("livetime").innerHTML = (new Date().toLocaleDateString());
    }