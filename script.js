let movement = [1, 26];
var bgsound = new Audio('sounds/Highway.mp3');
var carEngine = new Audio('sounds/Car-engine-loop2.mp3');
var explosion = new Audio('sounds/Explosion.mp3');
let enemyChoose = 0;
bgsound.volume = 0.15;
carEngine.volume = 0.5;
explosion.volume = 0.2;
carEngine.preload = true;
var motorsound = 0;
let check = false;
let scorePoints = 0;
let i = 100;

window.onload = function () {
    document.getElementById("puntos").value = 0;
    document.getElementById("carLight").style.display = "none";
    document.getElementById("eC").style.display = "none";
    document.getElementById("Explode").style.display = "none";
    Honk();
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
    document.getElementById("eC").src = "./sprite/ECar.png";
    setTimeout(function () {
        document.getElementById("nC").src = "./sprite/carSpeed.png";
        document.getElementById("eC").src = "./sprite/ECarSpeed.png";
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
    setTimeout(function () {
        document.getElementById("carLight").style.display = "block";
        document.getElementById("honk").pause();
        document.getElementById("honk").currentTime = 0;
        document.getElementById("honk").volume = 0.2;
        document.getElementById("honk").play();
    }, 500);
    document.getElementById("carLight").style.display = "none";
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
        enemySpawn();
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
}
document.onkeydown = function (e) {
    carOutOfScreen();
    if (e.keyCode != 0 && motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
        enemySpawn();
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
function enemySpawn() {
    // Variable random del 1 al 3 para que el enemigo salga de una de las 3 posiciones.
    var random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    // Si el random es 1, el enemigo aparecerá en la posición 1.
    if (random == 1) {
        enemyChoose = 26;
        document.getElementById("eC").style.display = "block";
        document.getElementById("eC").style.margin = enemyChoose + "rem " + "70rem";
    }
    // Si el random es 2, el enemigo aparecerá en la posición 2.
    if (random == 2) {
        enemyChoose = 13;
        document.getElementById("eC").style.display = "block";
        document.getElementById("eC").style.margin = enemyChoose + "rem " + "70rem";
    }
    // Si el random es 3, el enemigo aparecerá en la posición 3.
    if (random == 3) {
        enemyChoose = 2;
        document.getElementById("eC").style.display = "block";
        document.getElementById("eC").style.margin = enemyChoose + "rem " + "70rem";
    }
}
// Si la imagen enemy está visible y la imagen carLight está visible.
function enemyCollision() {
    // Si la posición de la imagen carLight es igual a la posición de la imagen enemy.
    if (document.getElementById("eC").style.margin == (movement[1] + "rem " + movement[0] + "rem")) {
        if (document.getElementById("eC").style.display == "block" && document.getElementById("carLight").style.display == "block") {
            scorePoints = 10 + scorePoints;
            // Se oculta la imagen carLight.
            document.getElementById("carLight").style.display = "none";
            // Se oculta la imagen enemy.
            document.getElementById("eC").style.display = "none";
            document.getElementById("Explode").style.margin = document.getElementById("eC").style.margin;
            // Se muestra la imagen explosion.
            document.getElementById("Explode").style.display = "block";
            // Se reproduce el sonido de explosion.
            explosion.play();
            document.getElementById("puntos").value = scorePoints;
            // Se oculta la imagen explosion.
            setTimeout(function () {
                document.getElementById("Explode").style.display = "none";
            }, 1000);
            i = 100;
            enemySpawn();
        }
    }
}
// Si carro choca con enemigo.
function carCollision() {
    // Si la posición de la imagen nC es igual a la posición de la imagen enemy.
    if (document.getElementById("eC").style.margin == (movement[1] + "rem " + movement[0] + "rem")) {
        if (document.getElementById("nC").style.display == "block" && document.getElementById("eC").style.display == "block") {
            scorePoints - 10;
            document.getElementById("puntos").value = scorePoints;
            if (scorePoints == 0) {
                alert("Game Over");
                location.reload();
            }
        }
    }
}

setInterval(function () {
    setTimeout(function () {
        // Si el enemigo llega a la posición 0 o -1, se oculta.
        if (i <= -23) {
            i = 100;
            document.getElementById("eC").style.display = "none";
            enemySpawn();
        }
        if (document.getElementById("eC").style.display == "block") {
            i--
            document.getElementById("eC").style.margin = enemyChoose + "rem " + i + "rem";
            console.log(document.getElementById("eC").style.margin);
            enemyCollision();
        }
    }, 250);
}, 50);

// prevenir que el carro se salga de la pantalla.
function carOutOfScreen() {
    // Si la resolución de la pantalla es mayor a 800px.
    if (window.innerWidth > 1000) {
        // Si la posición de la imagen car es menor a 0.
        if (movement[0] < -10) {
            movement[0] = -1;
            document.getElementById("carro").style.margin = movement[1] + "rem " + movement[0] + "rem";
        }
        // Si la posición de la imagen car es mayor a 100.
        if (movement[0] > 70) {
            movement[0] = 70;
            document.getElementsByClassName("car")[0].style.margin = movement[1] + "rem " + movement[0] + "rem";
        }
    }
    // Si la resolución de la pantalla es menor a 800px.
    if (window.innerWidth < 950) {
        // Si la posición de la imagen car es menor a 0.
        if (movement[0] < 0) {
            movement[0] = -1;
            document.getElementsByClassName("car")[0].style.margin = movement[1] + "rem " + movement[0] + "rem";
        }
        // Si la posición de la imagen car es mayor a 100.
        if (movement[0] > 40) {
            movement[0] = 40;
            document.getElementsByClassName("car")[0].style.margin = movement[1] + "rem " + movement[0] + "rem";
        }
    }
}