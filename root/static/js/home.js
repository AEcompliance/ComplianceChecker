// Add this at the beginning of the file
document.addEventListener('DOMContentLoaded', function() {
    // Handle scroll indicator click
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Handle contact link clicks
    const contactLinks = document.querySelectorAll('a[href="/#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const contactPosition = contactSection.offsetTop - headerHeight;
                window.scrollTo({
                    top: contactPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.querySelector('.scroll-indicator').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
// Get the modal
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");

// Get all gallery images
var images = document.getElementsByClassName("gallery-image");

// Add click event to all gallery images
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
}

// Close modal when clicking anywhere
modal.onclick = function() {
    modal.style.display = "none";
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
}

// Prevent modal from closing when clicking the image itself
modalImg.onclick = function(event) {
    event.stopPropagation();
}