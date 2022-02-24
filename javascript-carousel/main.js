var $allImages = document.querySelectorAll('.carousel-item');
var $prevImage = document.querySelector('.prev-item');
var $nextImage = document.querySelector('.next-item');
var $totalImages = $allImages.length;
var $dotContainer = document.querySelector('.dot-container');
var $allDots = document.querySelectorAll('.dot');
var currentImage = 0;
setInterval(rotateImages, 3000);

function changeCurrentImage() {
  // make all slides hidden
  for (var i = 0; i < $allImages.length; i++) {
    $allImages[i].setAttribute('class', 'hidden carousel-item');
  }
  // reveal only slide at currentImage count
  $allImages[currentImage].setAttribute('class', 'visible carousel-item');
}

function changeDots(event) {
  // clicked dot changes image
  if (event.target.matches('.dot')) {
    // make all dots hollow, change all images to hidden
    for (var i = 0; i < $allDots.length; i++) {
      if ($allDots[i] === event.target) {
        $allDots[i].className = 'dot fas fa-circle';
        for (var a = 0; a < $allImages.length; a++) {
          $allImages[a].setAttribute('class', 'hidden carousel-item');
        }
        $allImages[i].setAttribute('class', 'visible carousel-item');
      } else {
        $allDots[i].className = 'dot far fa-circle';
      }
    }
  }
}
$dotContainer.addEventListener('click', changeDots);

function goToPrevImage() {
  // if at beginning
  if (currentImage === 0) {
    currentImage = $totalImages - 1;
  } else {
    currentImage--;
  }
  cycleDots();
  changeCurrentImage();
}

function goToNextImage() {
  // if at end:
  if (currentImage === $totalImages - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  cycleDots();
  changeCurrentImage();
}

$prevImage.addEventListener('click', goToPrevImage);
$nextImage.addEventListener('click', goToNextImage);

function cycleDots() {
  // make all dots hollow
  for (var i = 0; i < $allDots.length; i++) {
    $allDots[i].setAttribute('class', 'dot far fa-circle');
  }
  // fill in dot for currentImage
  $allDots[currentImage].setAttribute('class', 'dot fas fa-circle');
}

function rotateImages() {
  if (currentImage < 5) {
    changeCurrentImage();
    cycleDots();
    currentImage++;
  } else {
    currentImage = 0;
  }
}
