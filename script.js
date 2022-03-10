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
    document.getElementById("eC").style.display = "none";
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

bgsound.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);


carEngine.addEventListener('timeupdate', function () {
    var buffer = .55;
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
});

function Honk() {
    document.getElementById("carLight").style.display = "block";
    document.getElementById("honk").pause();
    document.getElementById("honk").currentTime = 0;
    document.getElementById("honk").volume = 0.2;
    document.getElementById("honk").play();
}

function dpadUp() {
    carOutOfScreen();
    if (motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
    }
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
function dpadDown() {
    carOutOfScreen();
    if (motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
    }
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
function dpadRight() {
    carOutOfScreen();
    if (motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
        enemySpawn();
    }
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
function dpadLeft() {
    carOutOfScreen();
    if (motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
    }
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
function dpadAttack() {
    Honk();
    setInterval(function () {
        document.getElementById("carLight").style.display = "none";
    }, 650);
}
document.onkeydown = function (e) {
    if (e.keyCode != 0 && motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
        enemySpawn();
        carOutOfScreen();
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
function enemySpawn(){
    // Variable random del 1 al 3 para que el enemigo salga de una de las 3 posiciones.
    var random = Math.floor(Math.random() * 3) + 1;
    // Si el random es 1, el enemigo aparecerá en la posición 1.
    if (random == 1) {
        document.getElementsByClassName("enemy")[0].style.display = "block";
        document.getElementsByClassName("enemy")[0].style.margin = "-60rem 37rem;";
    }
    // Si el random es 2, el enemigo aparecerá en la posición 2.
    if (random == 2) {
        document.getElementsByClassName("enemy")[0].style.display = "block";
        document.getElementsByClassName("enemy")[0].style.margin = "-73rem 37rem;";
    }
    // Si el random es 3, el enemigo aparecerá en la posición 3.
    if (random == 3) {
        document.getElementsByClassName("enemy")[0].style.display = "block";
        document.getElementsByClassName("enemy")[0].style.margin = "-85rem 37rem;";
    }
}
// Si la imagen enemy está visible y la imagen carLight está visible.
function enemyCollision() {
    if (document.getElementsByClassName("enemy")[0].style.display == "block" && document.getElementById("carLight").style.display == "block") {
        // Si la posición de la imagen carLight es igual a la posición de la imagen enemy.
        if (document.getElementById("carLight").style.margin == document.getElementsByClassName("enemy")[0].style.margin) {
            // Se le quita la vida al jugador.
            life--;
            // Se oculta la imagen carLight.
            document.getElementById("carLight").style.display = "none";
            // Se oculta la imagen enemy.
            document.getElementsByClassName("enemy")[0].style.display = "none";
            // Se muestra la imagen explosion.
            document.getElementsByClassName("explosion")[0].style.display = "block";
            // Se reproduce el sonido de explosion.
            explosion.play();
            // Se oculta la imagen explosion.
            setTimeout(function () {
                document.getElementsByClassName("explosion")[0].style.display = "none";
            }, 1000);
        }
    }
}
// prevenir que el carro se salga de la pantalla.
function carOutOfScreen() {
    if (movement[0] < -1) {
        movement[0] = -1;
        document.getElementsByClassName("car")[0].style.margin = movement[1] + "rem " + movement[0] + "rem";

    }
    if (movement[0] > 65) {
        movement[0] = 65;
        document.getElementsByClassName("car")[0].style.margin = movement[1] + "rem " + movement[0] + "rem";
    }
}