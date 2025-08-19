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

    if ((cells[0].innerHTML != '' && cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML) ||
        (cells[3].innerHTML != '' && cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML) ||
        (cells[6].innerHTML != '' && cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML) ||
        (cells[0].innerHTML != '' && cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML) ||
        (cells[1].innerHTML != '' && cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML) ||
        (cells[2].innerHTML != '' && cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML) ||
        (cells[0].innerHTML != '' && cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML) ||
        (cells[2].innerHTML != '' && cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML)) {
        alert('qalib var');
        gameEnd = true;
    }
}