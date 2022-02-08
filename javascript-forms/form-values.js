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

/*
Q&A Code
------------------
$contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var name = $form.elements.name.value;
  var email = $form.elements.email.value;
  var message = $form.elements.message.value;
  var messageData = {
    name: name,
    email: email,
    message: message
  };
  console.log('messageData:', messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);

*/
