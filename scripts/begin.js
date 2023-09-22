var button = document.getElementById("twoPlayer")
var main = document.getElementById("title")

var board = document.getElementById("board")
var scoreBoard = document.getElementById("scoreboard")

function buttonPress() {
    button.style.opacity = "0"
    setTimeout(transitionOut, 500)
}
function transitionOut() {
    button.style.marginTop = "-25%"
    main.style.marginTop = "-50%"
    setTimeout(transitionIn, 500)
}
function transitionIn() {
    board.style.marginBottom = "10%"
    scoreBoard.style.marginRight = "10%"
    scoreBoard.style.marginTop = "18%"
    scoreBoard.style.display = "flex"
}
