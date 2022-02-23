var $countdown = document.querySelector('.countdown-display');
var counter = 4;
var intervalId = setInterval(countdown, 1000);

function countdown() {
  counter -= 1;
  $countdown.textContent = counter;
  if (counter <= 0) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
