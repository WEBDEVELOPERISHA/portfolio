const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show or hide the "Scroll to Top" button based on the user's scroll position
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to the top of the page when the "Scroll to Top" button is clicked
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});