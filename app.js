const toggleButton = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.nav-area');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})