var $allSpans = document.querySelectorAll('span');
var currentIndex = 0;

function handleKeydown(event) {
  if (event.key === $allSpans[currentIndex].textContent) {
    currentIndex.className = 'underline';
    $allSpans[currentIndex].className = 'green';
    currentIndex++;
  } else {
    $allSpans[currentIndex].className = 'red';
  }
}

document.addEventListener('keydown', handleKeydown);

/*
  - Need condition that sets previous keys as green
    - and moves onto next character
    - makes current character underline
    - WHITE SPACE property for spaces!!???!
*/

// REVERSE OF CURRENT FUNCTION
// // if (event.key !== $allSpans[i].textContent) {
// $allSpans[i].className = 'red';
// } else {
//   $allSpans[i].className = 'green';
// }
