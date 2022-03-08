let movement = [1, 26];
var bgsound = new Audio('sounds/Highway.mp3');
var carEngine = new Audio('sounds/Car-engine.mp3');
bgsound.loop();
bgsound.volume = 0.1;
carEngine.volume = 0.1;
var motorsound = 0;
window.onload = function () {
    bgsound.play();
    document.getElementById("carLight").style.display = "none";
    document.body.style.overflow = "hidden";
    carEngine.play();
}

document.oncontextmenu = function () {
    return false;
}

document.ondragstart = function () {
    return false;
}
function Engine() {
    carEngine.currentTime = 3;
    carEngine.play();
}
setInterval(function () {
    document.getElementById("nC").src = "./sprite/carSpeed2.png";
    setTimeout(function () {
        document.getElementById("nC").src = "./sprite/carSpeed.png";
    }, 125);
}, 250);

document.onkeydown = function (e) {
    if (e.keyCode == 87 || e.keyCode == 119) {
        switch (movement[1]) {
            case 26:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + movement[0] + "rem";
                movement[1] = 13;
                break;
            case 13:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + movement[0] + "rem";
                movement[1] = 2;
                break;
        }
    }
    if (e.keyCode == 83 || e.keyCode == 115) {
        switch (movement[1]) {
            case 2:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + movement[0] + "rem";
                movement[1] = 13;
                break;
            case 13:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + movement[0] + "rem";
                movement[1] = 26;
                break;
        }
    }
    if (e.keyCode == 68 || e.keyCode == 100) {
        switch (movement[1]) {
            case 2:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + ++movement[0] + "rem";
                movement[1] = 2;
                break;
            case 13:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + ++movement[0] + "rem";
                movement[1] = 13;
                break;
            case 26:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + ++movement[0] + "rem";
                movement[1] = 26;
                break;
        }
    }
    if (e.keyCode == 65 || e.keyCode == 97) {
        switch (movement[1]) {
            case 2:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + --movement[0] + "rem";
                movement[1] = 2;
                break;
            case 13:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + --movement[0] + "rem";
                movement[1] = 13;
                break;
            case 26:
                Engine();
                document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + --movement[0] + "rem";
                movement[1] = 26;
                break;
        }
    }
    if (e.keyCode == 69 || e.keyCode == 101) {
        document.getElementById("carLight").style.display = "block";
        document.getElementById("honk").volume = 0.1;
        document.getElementById("honk").pause();
        document.getElementById("honk").currentTime = 0;
        document.getElementById("honk").play();
    }
}
document.onkeyup = function (e) {
    if (e.keyCode == 69 || e.keyCode == 101) {
        document.getElementById("carLight").style.margin = "-12.78rem 5.5rem";
        document.getElementById("carLight").style.display = "none";
    }
}
