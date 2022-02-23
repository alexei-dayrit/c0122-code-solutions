var $msg = document.querySelector('.message');

function sayHello() {
  $msg.textContent = 'Hello There';
}

setTimeout(sayHello, 2000);
