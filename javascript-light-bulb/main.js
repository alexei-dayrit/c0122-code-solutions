/*
  Goal:
  - When button is clicked turns light off
  - When button clicked again light turns back on
---------------------
  - Query DOM for button and container
  - Function should change element class name from on-btn to off-btn
    - Should also change container class name from light to dark background
  - Need to add if statement to check if button is on or off
    - If off change button class to on-btn and container to light background
    - If on change button class to off-btn and container to dark background
  - Add event listener for click on button
*/

var $container = document.querySelector('.container');
var $button = document.querySelector('.on-btn');

function handleLight(event) {
  if ($button.className === 'on-btn') {
    $button.className = 'off-btn';
    $container.className = 'container dark-background';
  } else if ($button.className === 'off-btn') {
    $button.className = 'on-btn';
    $container.className = 'container light-background';
  }
}

$button.addEventListener('click', handleLight);
