// Funcionalidade do Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar o menu ao clicar em um link (em dispositivos móveis)
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
