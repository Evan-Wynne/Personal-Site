window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    const fadeStart = 100; // Start fading after 100px of scrolling
    const fadeEnd = 300; // Fully faded at 300px of scrolling

    if (scrollPosition <= fadeStart) {
        header.style.opacity = 1;
    } else if (scrollPosition >= fadeEnd) {
        header.style.opacity = 0;
    } else {
        const opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        header.style.opacity = opacity;
    }
});