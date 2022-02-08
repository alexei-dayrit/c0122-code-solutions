function handleFocus(event) {
  console.log('handle msg:', 'focus event fired');
  console.log('target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur msg:', 'blur event fired');
  console.log('target name:', event.target.name);
}

function handleInput(event) {
  console.log('target name:', event.target.name);
  console.log('target value:', event.target.value);
}

/*
  Q&A Code for handleInput function
  ---------------------------------
  function handleInput(event) {
    console.log('value of', event.target.name + ':', event.target.value);
  }
*/

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
