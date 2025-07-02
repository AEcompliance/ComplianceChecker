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