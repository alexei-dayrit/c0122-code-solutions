var $tabContainer = document.querySelector('.tab-container');
var $allTabs = document.querySelectorAll('.tab');
var $allViews = document.querySelectorAll('.view');

function tabHandler(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $allTabs.length; i++) {
      if ($allTabs[i] === event.target) {
        $allTabs[i].className = 'tab active';
      } else {
        $allTabs[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var $dataView = event.target.getAttribute('data-view');
    for (var a = 0; i < $allViews.length; i++) {
      if ($allViews[a].getAttribute('data-view') === $dataView) {
        $allViews[a].className = 'view';
      } else {
        $allViews[a].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', tabHandler);
