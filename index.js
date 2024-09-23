let secondsPassed = 0;
let interval = null;
let started = false;
const time = document.getElementById("time");

function setTime(){
    const minutes = Math.floor(secondsPassed/60);
    const seconds = secondsPassed%60;
    if(minutes<10){
        if(seconds<10){
            time.innerHTML = `0${minutes}:0${seconds}`;
        }
        else{
            time.innerHTML = `0${minutes}:${seconds}`;
        }
    }
    else{
        if(seconds<10){
            time.innerHTML = `${minutes}:0${seconds}`;
        }
        else{
            time.innerHTML = `${minutes}:${seconds}`;
        }
    }
}

function timer(){
    secondsPassed++;
    setTime();
}

function startClock(){
    if(!started){
        interval = setInterval(timer, 1000);
        started = true;
    }
}

function stopClock(){
    clearInterval(interval);
    started = false;
}

function resetClock(){
    stopClock();
    secondsPassed = 0;
    setTime();
}