var player = 'X';
var gameEnd = false;

function play(cell) {
    if (cell.innerHTML == '') {
        cell.innerHTML = player;
        checkWin();
        if (!gameEnd) {
            if (player == 'X') {
                player = 'O';
            } else if (player == 'O') {
                player = 'X';
            }
        } else {
            player = null;
        }
    }
}

function checkWin() {
    var cells = document.querySelectorAll('.cell');
    var winCells = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]];

    for (var i = 0; i < winCells.length; i++) {
        var a = winCells[i][0];
        var b = winCells[i][1];
        var c = winCells[i][2];

        if (cells[a].innerHTML != '' && cells[a].innerHTML == cells[b].innerHTML && cells[b].innerHTML == cells[c].innerHTML) {
            cells[a].style.backgroundColor = 'lightsalmon';
            cells[b].style.backgroundColor = 'lightsalmon';
            cells[c].style.backgroundColor = 'lightsalmon';
            gameEnd = true;
        }
    }
}