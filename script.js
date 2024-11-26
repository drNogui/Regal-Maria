
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-grid img');

    images.forEach((img) => {
        const originalSrc = img.src; // Guarda la fuente original de la imagen

        img.addEventListener('click', () => {
            img.classList.toggle('flipped');
            setTimeout(() => {
                img.src = img.classList.contains('flipped') ? 'images/prova.jpg' : originalSrc;
            }, 300); // Ajusta el tiempo según la duración de la transición
        });
    });
});
