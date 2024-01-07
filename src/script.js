// Function to change navbar text color on scroll
function checkScroll() {
    var navbar = document.getElementById('navbar'); // Replace 'navbar' with the ID or class of your navbar
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // You can adjust '50' to the scroll position you want
        navbar.classList.add('text-black');
        navbar.classList.remove('text-white'); // Replace 'text-white' with the original text color class if it's different
    } else {
        navbar.classList.add('text-white'); // Replace 'text-white' with the original text color class
        navbar.classList.remove('text-black');
    }
}

// Add scroll event listener
window.addEventListener('scroll', checkScroll);
