var $countdown = document.querySelector('.countdown-display');
var countdownId = null;
/*
  In this case null isn't necessary, can just do:
    var countdownId = setInterval(countDown, 1000);
  This var doesn't need to be at the top because JS 'hoists' its function definiton,
  and the function value.
  Note: JS only hoists variable names and not its value.
*/
var counter = 4;

function countDown() {
  counter -= 1;
  if (counter > 0) {
    $countdown.textContent = counter;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countDown, 1000);
