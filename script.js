/*
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-grid img');

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            img.classList.toggle('flipped');
            setTimeout(() => {
                img.src = img.classList.contains('flipped') ? `images/OtherImage${index + 1}.png` : 'images/Map.png';
            }, 300); // Ajusta el tiempo según la duración de la transición
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-grid img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            this.src = 'images/prova.jpg';
        });
    });
});