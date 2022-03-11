var $allImages = document.querySelectorAll('.carousel-item');
var $prevImage = document.querySelector('.prev-item');
var $nextImage = document.querySelector('.next-item');
var $totalImages = $allImages.length;
var $dotContainer = document.querySelector('.dot-container');
var $allDots = document.querySelectorAll('.dot');
var currentImage = 0;

function changeCurrentImage() {
  for (var i = 0; i < $allImages.length; i++) {
    $allImages[i].setAttribute('class', 'hidden carousel-item');
  }
  $allImages[currentImage].setAttribute('class', 'visible carousel-item');
}

function changeDots(event) {
  if (event.target.matches('.dot')) {
    for (var i = 0; i < $allDots.length; i++) {
      if ($allDots[i] === event.target) {
        $allDots[i].className = 'dot fas fa-circle';
        for (var a = 0; a < $allImages.length; a++) {
          $allImages[a].setAttribute('class', 'hidden carousel-item');
        }
        $allImages[i].setAttribute('class', 'visible carousel-item');
        currentImage = i;
      } else {
        $allDots[i].className = 'dot far fa-circle';
      }
    }
  }
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

$dotContainer.addEventListener('click', changeDots);

function goToPrevImage() {
  if (currentImage === 0) {
    currentImage = $totalImages - 1;
  } else {
    currentImage--;
  }
  cycleDots();
  changeCurrentImage();
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

function goToNextImage() {
  if (currentImage === $totalImages - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  cycleDots();
  changeCurrentImage();
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

$prevImage.addEventListener('click', goToPrevImage);
$nextImage.addEventListener('click', goToNextImage);

function cycleDots() {
  for (var i = 0; i < $allDots.length; i++) {
    $allDots[i].setAttribute('class', 'dot far fa-circle');
  }
  $allDots[currentImage].setAttribute('class', 'dot fas fa-circle');
  clearInterval(intervalId);
  intervalId = setInterval(rotateImages, 4000);
}

function rotateImages() {
  currentImage++;
  if (currentImage < 5) {
    changeCurrentImage();
    cycleDots();
  } else {
    currentImage = -1;
    clearInterval(intervalId);
    intervalId = setInterval(rotateImages, 4000);
  }
}

var intervalId = setInterval(rotateImages, 4000);
