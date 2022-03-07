let movement = [1, 26];
window.onload = function () {
    document.getElementById("carLight").style.display = "none";
    document.body.style.overflow = "hidden";
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

document.onkeydown = function (e) {
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
            case 2:
                document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + movement[0] + "rem";
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
                document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + movement[0] + "rem";
                movement[1] = 26;
                break;
            case 26:
                document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + movement[0] + "rem";
                movement[1] = 13;
                break;
        }
    }
    if (e.keyCode == 68 || e.keyCode == 100) {
        if (movement[1] == 2) {
            document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + ++movement[0] + "rem";
        }
        if (movement[1] == 13) {
            document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + ++movement[0] + "rem";
        }
        if (movement[1] == 26) {
            document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + ++movement[0] + "rem";
        }
    }
    if (e.keyCode == 65 || e.keyCode == 97) {
        if (movement[1] == 2) {
            document.getElementsByClassName("car")[0].style.margin = 2 + "rem " + --movement[0] + "rem";
        }
        if (movement[1] == 13) {
            document.getElementsByClassName("car")[0].style.margin = 13 + "rem " + --movement[0] + "rem";
        }
        if (movement[1] == 26) {
            document.getElementsByClassName("car")[0].style.margin = 26 + "rem " + --movement[0] + "rem";
        }
    }
    if (e.keyCode == 69 || e.keyCode == 101) {
        document.getElementById("carLight").style.display = "block";
        document.getElementById("honk").pause();
        document.getElementById("honk").currentTime = 0;
        document.getElementById("honk").volume = 0.2;
        document.getElementById("honk").play();
    }
}
document.onkeyup = function (e) {
    if (e.keyCode == 69 || e.keyCode == 101) {
        document.getElementById("carLight").style.margin = "-12.78rem 5.5rem";
        document.getElementById("carLight").style.display = "none";
    }
}
