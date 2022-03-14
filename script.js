let movement = [1, 26];
let enemyMovement = [1, 26];
var bgsound = new Audio('sounds/Highway.mp3');
var carEngine = new Audio('sounds/Car-engine-loop2.mp3');
var explosion = new Audio('sounds/Explosion.mp3');
let enemyChoose = 0;
let obstacleChoose = 0;
let obstacleChoose2 = 0;
bgsound.volume = 0.15;
carEngine.volume = 0.5;
explosion.volume = 0.2;
carEngine.preload = true;
var motorsound = 0;
let check = false;
let scorePoints = 0;
let i = 100;
let iO = 100;
let iO2 = 100;
let MostrarInfo = 0;

window.onload = function () {
    document.getElementById("tutorial").style.zIndex = "-2";
    document.getElementById("puntos").value = 0;
    document.getElementById("carLight").style.display = "none";
    document.getElementById("tutorial").style.display = "none";
    document.getElementById("eC").style.display = "none";
    document.getElementById("Explode").style.display = "none";
    document.getElementById("ExplodeN").style.display = "none";
    document.getElementById("ob1").style.display = "none";
    document.getElementById("ob2").style.display = "none";
    document.body.style.overflow = "hidden";
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

function HelpHover() {
    document.getElementById("ayuda").src = "sprite/HelpHover.png";
}
function Help() {
    document.getElementById("ayuda").src = "sprite/Help.png";
}
function tutoInfo(){
    if(MostrarInfo == 0){
        document.getElementById("tutorial").style.display = "block";
        document.getElementById("tutorial").style.zIndex = "0";
        MostrarInfo = 1;
    }
    else{
        document.getElementById("tutorial").style.display = "none";
        document.getElementById("tutorial").style.zIndex = "-2";
        MostrarInfo = 0;
    }
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
    // Agrega los valores de la posicion del carro en un array con los valores x, y, w, h.
    dim1 = document.getElementById("nC").getBoundingClientRect();
    if (motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
        enemySpawn();
        trashSpawn();
        rockSpawn();
    }
    switch (movement[1]) {
        case 26:
            document.getElementById("carLight").style.margin = "-25.78rem " + (movement[0] + 4.6) + "rem";
            document.getElementById("nC").style.margin = 13 + "rem " + movement[0] + "rem";
            movement[1] = 13;
            break;
        case 13:
            document.getElementById("carLight").style.margin = "-14.78rem " + (movement[0] + 4.6) + "rem";
            document.getElementById("nC").style.margin = 2 + "rem " + movement[0] + "rem";
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
        trashSpawn();
        rockSpawn();
    }
    switch (movement[1]) {
        case 2:
            document.getElementById("carLight").style.margin = "-25.78rem " + (movement[0] + 4.6) + "rem";
            document.getElementById("nC").style.margin = 13 + "rem " + movement[0] + "rem";
            movement[1] = 13;
            break;
        case 13:
            document.getElementById("carLight").style.margin = "-38.78rem " + (movement[0] + 4.6) + "rem";
            document.getElementById("nC").style.margin = 26 + "rem " + movement[0] + "rem";
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
        trashSpawn();
        rockSpawn();
    }
    switch (movement[1]) {
        case 2:
            document.getElementById("carLight").style.margin = "-14.78rem " + (++movement[0] + 6.6) + "rem";
            document.getElementById("nC").style.margin = 2 + "rem " + ++movement[0] + "rem";
            break;
        case 13:
            document.getElementById("carLight").style.margin = "-25.78rem " + (++movement[0] + 6.6) + "rem";
            document.getElementById("nC").style.margin = 13 + "rem " + ++movement[0] + "rem";
            break;
        case 26:
            document.getElementById("carLight").style.margin = "-38.78rem " + (++movement[0] + 6.6) + "rem";
            document.getElementById("nC").style.margin = 26 + "rem " + ++movement[0] + "rem";
            break;
    }
}
function dpadLeft() {
    carOutOfScreen();
    if (motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
        enemySpawn();
        trashSpawn();
        rockSpawn();
    }
    switch (movement[1]) {
        case 2:
            document.getElementById("carLight").style.margin = "-14.78rem " + (--movement[0] + 4.6) + "rem";
            document.getElementById("nC").style.margin = 2 + "rem " + --movement[0] + "rem";
            break;
        case 13:
            document.getElementById("carLight").style.margin = "-25.78rem " + (--movement[0] + 4.6) + "rem";
            document.getElementById("nC").style.margin = 13 + "rem " + --movement[0] + "rem";
            break;
        case 26:
            document.getElementById("carLight").style.margin = "-38.78rem " + (--movement[0] + 4.6) + "rem";
            document.getElementById("nC").style.margin = 26 + "rem " + --movement[0] + "rem";
            break;
    }
}
function dpadAttack() {
    Honk();
}
document.onkeydown = function (e) {
    if (e.keyCode != 0 && motorsound == 0) {
        bgsound.play();
        carEngine.play();
        motorsound++;
        enemySpawn();
        trashSpawn();
        rockSpawn();
        Honk();
    }
    if (e.keyCode == 87 || e.keyCode == 119) {
        switch (movement[1]) {
            case 26:
                document.getElementById("carLight").style.margin = "-25.78rem " + (movement[0] + 5.6) + "rem";
                document.getElementById("nC").style.margin = 13 + "rem " + movement[0] + "rem";
                movement[1] = 13;
                break;
            case 13:
                document.getElementById("carLight").style.margin = "-14.78rem " + (movement[0] + 5.6) + "rem";
                document.getElementById("nC").style.margin = 2 + "rem " + movement[0] + "rem";
                movement[1] = 2;
                break;
        }
    }
    if (e.keyCode == 83 || e.keyCode == 115) {
        carOutOfScreen();
        switch (movement[1]) {
            case 2:
                document.getElementById("carLight").style.margin = "-25.78rem " + (movement[0] + 5.6) + "rem";
                document.getElementById("nC").style.margin = 13 + "rem " + movement[0] + "rem";
                movement[1] = 13;
                break;
            case 13:
                document.getElementById("carLight").style.margin = "-38.78rem " + (movement[0] + 5.6) + "rem";
                document.getElementById("nC").style.margin = 26 + "rem " + movement[0] + "rem";
                movement[1] = 26;
                break;
        }
    }
    if (e.keyCode == 68 || e.keyCode == 100) {
        carOutOfScreen();
        switch (movement[1]) {
            case 2:
                document.getElementById("carLight").style.margin = "-14.78rem " + (++movement[0] + 6.6) + "rem";
                document.getElementById("nC").style.margin = 2 + "rem " + ++movement[0] + "rem";
                break;
            case 13:
                document.getElementById("carLight").style.margin = "-25.78rem " + (++movement[0] + 6.6) + "rem";
                document.getElementById("nC").style.margin = 13 + "rem " + ++movement[0] + "rem";
                break;
            case 26:
                document.getElementById("carLight").style.margin = "-38.78rem " + (++movement[0] + 6.6) + "rem";
                document.getElementById("nC").style.margin = 26 + "rem " + ++movement[0] + "rem";
                break;
        }
    }
    if (e.keyCode == 65 || e.keyCode == 97) {
        carOutOfScreen();
        switch (movement[1]) {
            case 2:
                document.getElementById("carLight").style.margin = "-14.78rem " + (--movement[0] + 4.6) + "rem";
                document.getElementById("nC").style.margin = 2 + "rem " + --movement[0] + "rem";
                break;
            case 13:
                document.getElementById("carLight").style.margin = "-25.78rem " + (--movement[0] + 4.6) + "rem";
                document.getElementById("nC").style.margin = 13 + "rem " + --movement[0] + "rem";
                break;
            case 26:
                document.getElementById("carLight").style.margin = "-38.78rem " + (--movement[0] + 4.6) + "rem";
                document.getElementById("nC").style.margin = 26 + "rem " + --movement[0] + "rem";
                break;
        }
    }
    if (e.keyCode == 69 || e.keyCode == 101) {
        carOutOfScreen();
        Honk();
    }
}

document.onkeyup = function (e) {
    if (e.keyCode == 69 || e.keyCode == 101) {
        document.getElementById("carLight").style.display = "none";
    }
    carOutOfScreen();
}
function enemySpawn() {
    // Variable random del 1 al 3 para que el enemigo salga de una de las 3 posiciones.
    var random = Math.floor(Math.random() * 3) + 1;
    // Si el random es 1, el enemigo aparecerá en la posición 1.
    if (random == 1) {
        enemyChoose = 26;
        document.getElementById("eC").style.margin = enemyChoose + "rem " + "70rem";
        document.getElementById("eC").style.display = "block";
    }
    // Si el random es 2, el enemigo aparecerá en la posición 2.
    if (random == 2) {
        enemyChoose = 13;
        document.getElementById("eC").style.margin = enemyChoose + "rem " + "70rem";
        document.getElementById("eC").style.display = "block";
    }
    // Si el random es 3, el enemigo aparecerá en la posición 3.
    if (random == 3) {
        enemyChoose = 2;
        document.getElementById("eC").style.margin = enemyChoose + "rem " + "70rem";
        document.getElementById("eC").style.display = "block";
    }
}
function rockSpawn() {
    var random = Math.floor(Math.random() * 3) + 1;
    if (random == 1 && random != obstacleChoose) {
        obstacleChoose = 26;
        document.getElementById("ob2").style.margin = obstacleChoose + "rem " + "70rem";
        document.getElementById("ob2").style.display = "block";
    }
    if (random == 2 && random != obstacleChoose) {
        obstacleChoose = 13;
        document.getElementById("ob2").style.margin = obstacleChoose + "rem " + "70rem";
        document.getElementById("ob2").style.display = "block";
    }
    if (random == 3 && random != obstacleChoose) {
        obstacleChoose = 2;
        document.getElementById("ob2").style.margin = obstacleChoose + "rem " + "70rem";
        document.getElementById("ob2").style.display = "block";
    }
}
function trashSpawn() {
    var random = Math.floor(Math.random() * 3) + 1;
    if (random == 1 && random != obstacleChoose2) {
        obstacleChoose2 = 26;
        document.getElementById("ob1").style.margin = obstacleChoose2 + "rem " + "70rem";
        document.getElementById("ob1").style.display = "block";
    }
    if (random == 2 && random != obstacleChoose2) {
        obstacleChoose2 = 13;
        document.getElementById("ob1").style.margin = obstacleChoose2 + "rem " + "70rem";
        document.getElementById("ob1").style.display = "block";
    }
    if (random == 3 && random != obstacleChoose2) {
        obstacleChoose2 = 2;
        document.getElementById("ob1").style.margin = obstacleChoose2 + "rem " + "70rem";
        document.getElementById("ob1").style.display = "block";
    }
}

function enemyCollision() {
    if ((enemyChoose + "rem " + (i + 6) + "rem") == (movement[1] + "rem " + movement[0] + "rem")) {
        if (document.getElementById("carLight").style.display == "block") {
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
function playerCollision() {
    if ((movement[1] + "rem " + movement[0] + "rem") == (enemyChoose + "rem " + (i + 7) + "rem")) {
        if (document.getElementById("carLight").style.display == "none") {
            scorePoints = scorePoints - 10;
            document.getElementById("puntos").value = scorePoints;
            document.getElementById("ExplodeN").style.margin = document.getElementById("nC").style.margin;
            // Se muestra la imagen explosion.
            document.getElementById("ExplodeN").style.display = "block";
            // Se reproduce el sonido de explosion.
            explosion.play();
            document.getElementById("puntos").value = scorePoints;
            // Se oculta la imagen explosion.
            setTimeout(function () {
                document.getElementById("ExplodeN").style.display = "none";
            }, 1000);
            i = 100;
            enemySpawn();
            if (scorePoints < -1) {
                document.getElementById("puntos").value = "Game Over";
                alert("Game Over");
                location.reload();
            }
        }
    }
    if (movement[0] == (iO + 15) && movement[1] == obstacleChoose) {
        scorePoints = scorePoints - 10;
        document.getElementById("puntos").value = scorePoints;
        document.getElementById("ExplodeN").style.margin = document.getElementById("nC").style.margin;
        // Se muestra la imagen explosion.
        document.getElementById("ExplodeN").style.display = "block";
        // Se reproduce el sonido de explosion.
        explosion.play();
        document.getElementById("puntos").value = scorePoints;
        // Se oculta la imagen explosion.
        setTimeout(function () {
            document.getElementById("ExplodeN").style.display = "none";
        }, 1000);
        iO = 100;
        trashSpawn();
        if (scorePoints < -1) {
            document.getElementById("puntos").value = "Game Over";
            alert("Game Over");
            location.reload();
        }
    }
    if (movement[0] == (iO2 + 15) && movement[1] == obstacleChoose2) {
        scorePoints = scorePoints - 10;
        document.getElementById("puntos").value = scorePoints;
        document.getElementById("ExplodeN").style.margin = document.getElementById("nC").style.margin;
        // Se muestra la imagen explosion.
        document.getElementById("ExplodeN").style.display = "block";
        // Se reproduce el sonido de explosion.
        explosion.play();
        document.getElementById("puntos").value = scorePoints;
        // Se oculta la imagen explosion.
        setTimeout(function () {
            document.getElementById("ExplodeN").style.display = "none";
        }, 1000);
        iO2 = 100;
        rockSpawn();
        if (scorePoints < -1) {
            document.getElementById("puntos").value = "Game Over";
            alert("Game Over");
            location.reload();
        }
    }
}

setInterval(function () {
    setTimeout(function () {
        enemyCollision();
        playerCollision();
        if (i <= -30) {
            i = 100;
            document.getElementById("eC").style.display = "none";
            enemySpawn();
        }
        if (iO <= -60) {
            iO = 100;
            document.getElementById("ob1").style.display = "none";
            trashSpawn();
        }
        if (iO2 <= -60) {
            iO2 = 100;
            document.getElementById("ob2").style.display = "none";
            rockSpawn();
        }
        if (document.getElementById("eC").style.display == "block") {
            enemyCollision();
            i--;
            document.getElementById("eC").style.margin = enemyChoose + "rem " + i + "rem";
        } if (document.getElementById("ob1").style.display == "block") {
            iO--;
            document.getElementById("ob1").style.margin = obstacleChoose + "rem " + iO + "rem";
        }
        if (document.getElementById("ob2").style.display == "block") {
            iO2--;
            document.getElementById("ob2").style.margin = obstacleChoose2 + "rem " + iO2 + "rem";
        }
    }, 250);
}, 50);

// prevenir que los objetos se salgan de la pantalla.
function carOutOfScreen() {
    // Si la resolución de la pantalla es mayor a 800px.
    if (window.innerWidth > 1000) {
        // Si la posición de la imagen car es menor a 0.
        if (movement[0] < -10) {
            movement[0] = -1;
            document.getElementById("nC").style.margin = movement[1] + "rem " + movement[0] + "rem";
        }
        // Si la posición de la imagen car es mayor a 100.
        if (movement[0] > 70) {
            movement[0] = 70;
            document.getElementById("nC").style.margin = movement[1] + "rem " + movement[0] + "rem";
        }
    }
    // Si la resolución de la pantalla es menor a 800px.
    if (window.innerWidth < 950) {
        // Si la posición de la imagen car es menor a 0.
        if (movement[0] < 0) {
            movement[0] = -1;
            document.getElementById("nC").style.margin = movement[1] + "rem " + movement[0] + "rem";
        }
        // Si la posición de la imagen car es mayor a 100.
        if (movement[0] > 40) {
            movement[0] = 40;
            document.getElementById("nC").style.margin = movement[1] + "rem " + movement[0] + "rem";
        }
    }
}