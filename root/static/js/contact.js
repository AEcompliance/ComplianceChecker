window.onload = function () {
    const anchor = document.getElementById("flash-message-anchor");
    if (anchor && anchor.innerText.trim().length > 0) {
        const elementTop = anchor.getBoundingClientRect().top + window.pageYOffset;
        const elementHeight = anchor.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Scroll so the message is centered in the viewport
        const scrollTo = elementTop - (viewportHeight / 2) + (elementHeight / 2);
        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }
};