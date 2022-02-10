/*
  Goal:
  - When button is clicked turns light off
  - When button clicked again light turns back on
---------------------
// Thought process for first attempt
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

var isLightOn = true;
function handleLight(event) {
  if (isLightOn) {
    isLightOn = false;
    $button.className = 'on-btn';
    $container.className = 'container light-background';
  } else {
    isLightOn = !isLightOn;
    $button.className = 'off-btn';
    $container.className = 'container dark-background';
  }
}

$button.addEventListener('click', handleLight);
