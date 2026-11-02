
// ==========================================
// XPRESSO CAFE - INTERACTIVE GALLERY
// ==========================================


// GET ALL GALLERY ELEMENTS

const galleryButtons = document.querySelectorAll(".gallery-image-button");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxTitle = document.getElementById("lightboxTitle");

const lightboxDescription = document.getElementById("lightboxDescription");

const imageCounter = document.getElementById("imageCounter");

const closeButton = document.getElementById("closeLightbox");

const previousButton = document.getElementById("prevImage");

const nextButton = document.getElementById("nextImage");


// STORE GALLERY INFORMATION

const galleryImages = [

    {
        src: "images/treats.jpeg",
        title: "Treats",
        description: "Fresh treats and baked products."
    },

    {
        src: "images/food.jpeg",
        title: "Food",
        description: "Delicious food for every occasion."
    },

    {
        src: "images/drinks.jpeg",
        title: "Drinks",
        description: "A selection of refreshing drinks."
    },

    {
        src: "images/coffee.jpeg",
        title: "Coffee",
        description: "Enjoy a great cup of coffee."
    }

];


// CURRENT IMAGE NUMBER

let currentImage = 0;


// ==========================================
// DISPLAY SELECTED IMAGE
// ==========================================

function showImage(index) {

    currentImage = index;

    const image = galleryImages[currentImage];

    lightboxImage.src = image.src;

    lightboxImage.alt = image.title;

    lightboxTitle.textContent = image.title;

    lightboxDescription.textContent = image.description;

    imageCounter.textContent =
        "Image " + (currentImage + 1) +
        " of " + galleryImages.length;

}


// ==========================================
// OPEN LIGHTBOX
// ==========================================

function openLightbox(index) {

    showImage(index);

    lightbox.showModal();

    closeButton.focus();

}


// ==========================================
// CLOSE LIGHTBOX
// ==========================================

function closeLightbox() {

    if (lightbox.open) {

        lightbox.close();

    }

}


// ==========================================
// NEXT IMAGE
// ==========================================

function nextImage() {

    currentImage++;

    if (currentImage >= galleryImages.length) {

        currentImage = 0;

    }

    showImage(currentImage);

}


// ==========================================
// PREVIOUS IMAGE
// ==========================================

function previousImage() {

    currentImage--;

    if (currentImage < 0) {

        currentImage = galleryImages.length - 1;

    }

    showImage(currentImage);

}


// ==========================================
// CLICK ON GALLERY IMAGES
// ==========================================

galleryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const imageIndex = Number(button.dataset.index);

        openLightbox(imageIndex);

    });

});


// ==========================================
// LIGHTBOX BUTTON EVENTS
// ==========================================

closeButton.addEventListener("click", closeLightbox);

nextButton.addEventListener("click", nextImage);

previousButton.addEventListener("click", previousImage);


// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

document.addEventListener("keydown", function(event) {

    if (!lightbox.open) {

        return;

    }

    if (event.key === "ArrowRight") {

        nextImage();

    }

    else if (event.key === "ArrowLeft") {

        previousImage();

    }

});


// ==========================================
// CLOSE WHEN CLICKING OUTSIDE IMAGE
// ==========================================

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// ==========================================
// LIGHTBOX COMPLETE
// ==========================================