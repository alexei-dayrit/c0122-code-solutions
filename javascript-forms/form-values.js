var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {};
  messageData.name = $form.elements.name.value;
  messageData.email = $form.elements.email.value;
  messageData.message = $form.elements[2].value;
  console.log('messageData:', messageData);
  $form.reset();
});
