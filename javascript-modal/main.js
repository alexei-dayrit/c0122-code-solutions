var $modalButton = document.querySelector('.modal-btn');
var $popUp = document.querySelector('.pop-up');
var $surveyButton = document.querySelector('.survey-btn');

$modalButton.addEventListener('click', function () {
  $popUp.className = 'row display-block';
});

$surveyButton.addEventListener('click', function () {
  $popUp.className = 'row pop-up';
});
