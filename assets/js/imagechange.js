var images = [
  "img/bg/(2).jpg",
  "img/bg/(3).jpg",
  "img/bg/(4).jpg",
  "img/bg/(5).jpg",
  "img/bg/(6).jpg",
];
var currentImageIndex = 0;
var bgImage = document.getElementById('bgImage');
var content = document.querySelector('.content');

function changeBackgroundImage() {
    bgImage.style.opacity = 0;
    bgImage.style.transform = 'scale(1.1)';

    setTimeout(function () {
        bgImage.src = images[currentImageIndex];
        bgImage.style.opacity = 1;
        bgImage.style.transform = 'scale(1)';
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 1000);
}

// Arka plan resmini değiştirmek ve içeriği güncellemek için belirli bir süre aralığı
setInterval(changeBackgroundImage, 5000); 