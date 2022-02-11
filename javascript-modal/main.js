var $modalButton = document.querySelector('.modal-btn');
var $hiddenPop = document.querySelector('.hidden-pop');
var $surveyButton = document.querySelector('.survey-btn');

$modalButton.addEventListener('click', function () {
  $hiddenPop.className = 'row shown-pop';
});

$surveyButton.addEventListener('click', function () {
  $hiddenPop.className = 'row hidden-pop';
});
