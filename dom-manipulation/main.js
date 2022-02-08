var counter = 0;

var $hotButton = document.querySelector('.hot-button');
var $counter = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  counter++;
  var temperature = null;
  if (counter < 4) {
    temperature = 'cold';
  } else if (counter < 7) {
    temperature = 'cool';
  } else if (counter < 10) {
    temperature = 'tepid';
  } else if (counter < 13) {
    temperature = 'warm';
  } else if (counter < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
  $counter.textContent = 'Clicks: ' + counter;
});
