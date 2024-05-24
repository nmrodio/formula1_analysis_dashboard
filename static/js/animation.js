// Get the car element
var car = document.getElementById('car');

// Initial position
var position = 0;

// Animation loop
function animate() {
    // Increment position
    position += 1;

    // Update element's position
    car.style.left = position + 'px';

    // Reset position when car goes off-screen
    if (position > window.innerWidth) {
        position = -car.offsetWidth;
    }

    // Request next frame
    requestAnimationFrame(animate);
}

// Start animation
animate();