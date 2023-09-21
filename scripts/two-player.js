var x = 1;
var B1 = "null";
var B2 = "null";
var B3 = "null";
var B4 = "null";
var B5 = "null";
var B6 = "null";
var B7 = "null";
var B8 = "null";
var B9 = "null";
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

function inputOne() {
    if (B1 != "blue" && B1 != "red") {
        if (x == 1) {
            box1.style.backgroundColor = "#698db8b9";
            box1.style.opacity = "1";
            B1 = "blue";
            x = 0;
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box1.style.backgroundColor = "#ee2b3fbe";
            box1.style.opacity = "1";
            B1 = "red";
            x = 1;
            testForWin()
        }
    }
}
function inputTwo() {
    if (B2 != "blue" && B2 != "red") {
        if (x == 1) {
            box2.style.backgroundColor = "#698db8b9"
            box2.style.opacity = "1"
            B2= "blue";
            x= 0
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box2.style.backgroundColor = "#ee2b3fbe"
            box2.style.opacity = "1"
            B2= "red"
            x= 1
            testForWin()
        }
    }
}
function inputThree() {
    if (B3 != "blue" && B3 != "red") {
        if (x == 1) {
            box3.style.backgroundColor = "#698db8b9"
            box3.style.opacity = "1"
            B3 = "blue";
            x= 0
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box3.style.backgroundColor = "#ee2b3fbe"
            box3.style.opacity = "1"
            B3 = "red"
            x= 1
            testForWin()
        }
    }
}
function inputFour() {
    if (B4 != "blue" && B4 != "red") {
        if (x == 1) {
            box4.style.backgroundColor = "#698db8b9"
            box4.style.opacity = "1"
            B4 = "blue";
            x = 0
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box4.style.backgroundColor = "#ee2b3fbe"
            box4.style.opacity = "1"
            B4 = "red"
            x = 1
            testForWin()
        }
    }
}
function inputFive() {
    if (B5 != "blue" && B5 != "red") {
        if (x == 1) {
            box5.style.backgroundColor = "#698db8b9"
            box5.style.opacity = "1"
            B5 = "blue";
            x= 0
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box5.style.backgroundColor = "#ee2b3fbe"
            box5.style.opacity = "1"
            B5 = "red"
            x= 1
            testForWin()
        }
    }
}
function inputSix() {
    if (B6 != "blue" && B6 != "red") {
        if (x == 1) {
            box6.style.backgroundColor = "#698db8b9"
            box6.style.opacity = "1"
            B6 = "blue";
            x= 0
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box6.style.backgroundColor = "#ee2b3fbe"
            box6.style.opacity = "1"
            B6 = "red"
            x= 1
            testForWin()
        }
    }
}
function inputSeven() {
    if (B7 != "blue" && B7 != "red") {
        if (x == 1) {
            box7.style.backgroundColor = "#698db8b9"
            box7.style.opacity = "1"
            B7 = "blue";
            x= 0
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box7.style.backgroundColor = "#ee2b3fbe"
            box7.style.opacity = "1"
            B7 = "red"
            x= 1
            testForWin()
        }
    }
}
function inputEight() {
    if (B8 != "blue" && B8 != "red") {
        if (x == 1) {
            box8.style.backgroundColor = "#698db8b9"
            box8.style.opacity = "1"
            B8 = "blue";
            x= 0
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box8.style.backgroundColor = "#ee2b3fbe"
            box8.style.opacity = "1"
            B8 = "red"
            x= 1
            testForWin()
        }
    }
}
function inputNine() {
    if (B9 != "blue" && B9 != "red") {
        if (x == 1) {
            box9.style.backgroundColor = "#698db8b9"
            box9.style.opacity = "1"
            B9 = "blue";
            x= 0
            testForWin()
            setTimeout(computerTurn("mindless"), 1000)
        }
        else {
            box9.style.backgroundColor = "#ee2b3fbe"
            box9.style.opacity = "1"
            B9 = "red"
            x= 1
            testForWin()
        }
    }
}

function endGame() {
}

function testForWin() {
    
    if (B1 == "blue" && B2 == "blue" && B3 == "blue") {
        endGame()
        box1.style.backgroundColor = "green"
        box2.style.backgroundColor = "green"
        box3.style.backgroundColor = "green"
    }
    else if (B1 == "blue" && B5 == "blue" && B9 == "blue") {
        endGame()
        box1.style.backgroundColor = "green"
        box5.style.backgroundColor = "green"
        box9.style.backgroundColor = "green"
    }
    else if (B1 == "blue" && B4 == "blue" && B7 == "blue") {
        endGame()
        box1.style.backgroundColor = "green"
        box4.style.backgroundColor = "green"
        box7.style.backgroundColor = "green"
    }
    else if (B4 == "blue" && B5 == "blue" && B6 == "blue") {
        endGame()
        box4.style.backgroundColor = "green"
        box5.style.backgroundColor = "green"
        box6.style.backgroundColor = "green"
    }
    else if (B7 == "blue" && B8 == "blue" && B9 == "blue") {
        endGame()
        box7.style.backgroundColor = "green"
        box8.style.backgroundColor = "green"
        box9.style.backgroundColor = "green"
    }
    else if (B2 == "blue" && B5 == "blue" && B8 == "blue") {
        endGame()
        box2.style.backgroundColor = "green"
        box5.style.backgroundColor = "green"
        box8.style.backgroundColor = "green"
    }
    else if (B3 == "blue" && B6 == "blue" && B9 == "blue") {
        endGame()
        box3.style.backgroundColor = "green"
        box6.style.backgroundColor = "green"
        box9.style.backgroundColor = "green"
    }
    else if (B3 == "blue" && B5 == "blue" && B7 == "blue") {
        endGame()
        box3.style.backgroundColor = "green"
        box5.style.backgroundColor = "green"
        box7.style.backgroundColor = "green"
    }
    if (B1 == "red" && B2 == "red" && B3 == "red") {
        endGame()
        box1.style.backgroundColor = "green"
        box2.style.backgroundColor = "green"
        box3.style.backgroundColor = "green"
    }
    else if (B1 == "red" && B5 == "red" && B9 == "red") {
        endGame()
        box1.style.backgroundColor = "green"
        box5.style.backgroundColor = "green"
        box9.style.backgroundColor = "green"
    }
    else if (B1 == "red" && B4 == "red" && B7 == "red") {
        endGame()
        box1.style.backgroundColor = "green"
        box4.style.backgroundColor = "green"
        box7.style.backgroundColor = "green"
    }
    else if (B4 == "red" && B5 == "red" && B6 == "red") {
        endGame()
        box4.style.backgroundColor = "green"
        box5.style.backgroundColor = "green"
        box6.style.backgroundColor = "green"
    }
    else if (B7 == "red" && B8 == "red" && B9 == "red") {
        endGame()
        box7.style.backgroundColor = "green"
        box8.style.backgroundColor = "green"
        box9.style.backgroundColor = "green"
    }
    else if (B2 == "red" && B5 == "red" && B8 == "red") {
        endGame()
        box2.style.backgroundColor = "green"
        box5.style.backgroundColor = "green"
        box8.style.backgroundColor = "green"
    }
    else if (B3 == "red" && B6 == "red" && B9 == "red") {
        endGame()
        box3.style.backgroundColor = "green"
        box6.style.backgroundColor = "green"
        box9.style.backgroundColor = "green"
    }
    else if (B3 == "red" && B5 == "red" && B7 == "red") {
        endGame()
        box3.style.backgroundColor = "green"
        box5.style.backgroundColor = "green"
        box7.style.backgroundColor = "green"
    }
}



var state = 0

function enableComputer() {
    buttonPress()
    state = 1
}

function buttonPress() {
    button1.style.opacity = "0"
    setTimeout(transitionOut, 500)
}
function transitionOut() {
    button1.style.marginTop = "-25%"
    main.style.marginTop = "-50%"
    setTimeout(transitionIn, 500)
}
function transitionIn() {
    board.style.marginBottom = "10%"
}

function play(box) {
    if (box == "B1") {
        B1 = "red"
        box1.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
    else if (box == "B2") {
        B2 = "red"
        box2.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
    else if (box == "B3") {
        B3 = "red"
        box3.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
    else if (box == "B4") {
        B4 = "red"
        box4.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
    else if (box == "B5") {
        B5 = "red"
        box5.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
    else if (box == "B6") {
        B6 = "red"
        box6.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
    else if (box == "B7") {
        B7 = "red"
        box7.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
    else if (box == "B8") {
        B8 = "red"
        box8.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
    else if (box == "B9") {
        B9 = "red"
        box9.style.backgroundColor = "#ee2b3fbe"
        x = 1
    }
}

var p = 0
function computerTurn(difficulty) {
    if (state == 1) {
        if (x == 0) {
            if (difficulty == "mindless") {
                var i = 0
                for (i=0; i<100; i++) {
                    p = Math.floor(Math.random() * 10)
                    if (p == 0 && B1 != "blue" && B1 != "red") {
                        play("B1")
                        i = 101
                    }
                    else if(p == 1 && B2 != "blue" && B2 != "red") {
                        play("B2")
                        i = 101
                    }
                    else if(p == 2 && B3 != "blue" && B3 != "red") {
                        play("B3")
                        i = 101
                    }
                    else if(p == 3 && B4 != "blue" && B4 != "red") {
                        play("B4")
                        i = 101
                    }
                    else if(p == 4 && B5 != "blue" && B5 != "red") {
                        play("B5")
                        i = 101
                    }
                    else if(p == 5 && B6 != "blue" && B6 != "red") {
                        play("B6")
                        i = 101
                    }
                    else if(p == 6 && B7 != "blue" && B7 != "red") {
                        play("B7")
                        i = 101
                    }
                    else if(p == 7 && B8 != "blue" && B8 != "red") {
                        play("B8")
                        i = 101
                    }
                    else if(p == 8 && B9 != "blue" && B9 != "red") {
                        play("B9")
                        i = 101
                    }
                }
            }
        }
    }
}