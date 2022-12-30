var computerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

for (var i = 0; i < 10; i++) {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerGuess);
  
    var userGuess = prompt("Enter r, p, or s to play!");

    userGuess = userGuess.toLowerCase();
  }

      if (userGuess === 'r' || userGuess === 'p' || userGuess === 's') {
        alert('The computer chose ' + computerGuess);

        if (userGuess === computerGuess) {
            ties++;
            alert("You've tied " + ties + ' time(s).');
        } else if (
            (userGuess === 'r' && computerGuess === 's') ||
            (userGuess === 's' && computerGuess === 'p') ||
            (userGuess === 'p' && computerGuess === 'r')
        ) {
            wins++;
            alert("You've won " + wins + ' time(s)!');
        } else {
            losses++;
            alert("You've lost " + losses + ' time(s).');
        }
    }
}

alert('Total wins: ' + wins + '\nTotal ties: ' + ties + '\nTotal losses: ' + losses);

  