document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde preloader'ı gizle
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
    }, 2000); // Örnekte 2000 milisaniye (2 saniye) süreyle gösterildikten sonra gizleniyor.
});
