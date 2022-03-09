let movement = [1, 26];
var bgsound = new Audio('sounds/Highway.mp3');
var carEngine = new Audio('sounds/Car-engine-loop2.mp3');
bgsound.volume = 0.15;
carEngine.volume = 0.5;
carEngine.preload = true;
var motorsound = 0;
let check = false;

window.onload = function () {
    Honk();
    document.getElementById("carLight").style.display = "none";
    document.body.style.overflow = "hidden";
    // disable mouse selection 
    document.onselectstart = function () {
        return false;
    }
}

document.oncontextmenu = function () {
    return false;
}

document.ondragstart = function () {
    return false;
}

setInterval(function () {
    document.getElementById("nC").src = "./sprite/carSpeed2.png";
    setTimeout(function () {
        document.getElementById("nC").src = "./sprite/carSpeed.png";
    }, 125);
}, 250);

bgsound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


carEngine.addEventListener('timeupdate', function(){
    var buffer = .55;
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});

function Honk(){
    document.getElementById("carLight").style.display = "block";
    document.getElementById("honk").pause();
    document.getElementById("honk").currentTime = 0;
    document.getElementById("honk").volume = 0.2;
    document.getElementById("honk").play();
}

document.onkeydown = function (e) {
    if (e.keyCode != 0 && motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
    }
    if (e.keyCode == 87 || e.keyCode == 119) {
        switch (movement[1]) {
            case 26:
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + movement[0] + "rem";
                movement[1] = 13;
                break;
            case 13:
                document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + movement[0] + "rem";
                movement[1] = 2;
                break;
        }
    }
    if (e.keyCode == 83 || e.keyCode == 115) {
        switch (movement[1]) {
            case 2:
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + movement[0] + "rem";
                movement[1] = 13;
                break;
            case 13:
                document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + movement[0] + "rem";
                movement[1] = 26;
                break;
        }
    }
    if (e.keyCode == 68 || e.keyCode == 100) {
        switch (movement[1]) {
            case 2:
                document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + ++movement[0] + "rem";
                break;
            case 13:
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + ++movement[0] + "rem";
                break;
            case 26:
                document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + ++movement[0] + "rem";
                break;
        }
    }
    if (e.keyCode == 65 || e.keyCode == 97) {
        switch (movement[1]) {
            case 2:
                document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + --movement[0] + "rem";
                break;
            case 13:
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + --movement[0] + "rem";
                break;
            case 26:
                document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + --movement[0] + "rem";
                break;
        }
    }
    if (e.keyCode == 69 || e.keyCode == 101) {
        Honk();
    }
}

document.onkeyup = function (e) {
    if (e.keyCode == 69 || e.keyCode == 101) {
        document.getElementById("carLight").style.margin = "-12.78rem 5.5rem";
        document.getElementById("carLight").style.display = "none";
    }
}
