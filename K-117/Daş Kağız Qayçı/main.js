function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var choiceOfComputer = choices[Math.floor(Math.random()*3)];
    var coc = document.querySelector('#choice-of-computer');
    coc.innerHTML = `Choice of computer: ${choiceOfComputer}`;
    var result;

    if (userChoice == choiceOfComputer) {
        result = 'Draw';
    } else if ((userChoice == 'rock' && choiceOfComputer == 'scissors') ||
               (userChoice == 'paper' && choiceOfComputer == 'rock') ||
               (userChoice == 'scissors' && choiceOfComputer == 'paper')) {
        result = 'You win';
    } else {
        result = 'Computer wins';
    }

    var winner = document.querySelector('#winner');
    winner.innerHTML = result;
}