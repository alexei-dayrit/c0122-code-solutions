var $allSpans = document.querySelectorAll('span');
var currentIndex = 0;

$allSpans[currentIndex].className = 'current-char';

function handleKeydown(event) {
  if (event.key === $allSpans[currentIndex].textContent) {
    $allSpans[currentIndex].className = 'correct';
    $allSpans[currentIndex + 1].className = 'current-char';
    currentIndex++;
  } else if ($allSpans[currentIndex].textContent === ' ' &&
    event.key !== $allSpans[currentIndex].textContent) {
    $allSpans[currentIndex].className = 'wrong-space';
  } else {
    $allSpans[currentIndex].className = 'wrong';

  }
}

document.addEventListener('keydown', handleKeydown);
