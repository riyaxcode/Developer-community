document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".background-slider img");
    let currentIndex = 0;

    function showNextImage() {
        if (images.length > 0) {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }
    }

    // Show the first image initially
    if (images.length > 0) {
        images[currentIndex].classList.add("active");
    }

    // Change image every 4 seconds
    setInterval(showNextImage, 4000);
});

// Selecting the gallery container
const galleryContainer = document.querySelector(".gallery");

if (galleryContainer) {
    alumniData.forEach(alumni => {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");

        card.innerHTML = `
            <div class="photo">
                <img src="${alumni.photo}" alt="Alumni Photo" class="alumni-photo">
            </div>
            <div class="testimonial-content">
                <h3 class="alumni-name">${alumni.name}</h3>
                <p class="alumni-course">${alumni.course}</p>
                <p class="alumni-review">${alumni.review}</p>
                <p class="alumni-skills">Skills Acquired: ${alumni.skills}</p>
            </div>
        `;

        galleryContainer.appendChild(card);
    });
} else {
    console.error('Gallery container not found!');
}
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for buttons
    document.getElementById('registerBtn').addEventListener('click', function() {
        alert("You are now registered! Check your email for further instructions.");
    });

    document.getElementById('joinBtn').addEventListener('click', function() {
        alert("You have joined the community! Welcome aboard.");
    });
});


