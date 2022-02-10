var $taskList = document.querySelector('.task-list');

function handleTaskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  var $closestItem = event.target.closest('.task-list-item');
  if (event.target.tagName === 'BUTTON') {
    console.log('closest  .task-list-item:', $closestItem);
    $closestItem.remove();
  }
}

$taskList.addEventListener('click', handleTaskList);

// event.target.$closestItem.remove();
