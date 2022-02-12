/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

function handleBeforeUnload(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

window.addEventListener('beforeunload', handleBeforeUnload);

/*
For event listener functions it's best to name it 'handle..event name'
If not using handle function in the future, it's okay to use an anonymous function
in the event listener
*/
