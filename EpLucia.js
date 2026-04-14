
let currentIndex = 0;

function moveSlide(direction) {
    const slide = document.querySelector('.carrossel-slide');
    const images = document.querySelectorAll('.carrossel-slide img');
    const totalImages = images.length;


    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const offset = -currentIndex * 100;
    
    slide.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 5000);

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.style.color = '#ffb74d';
        } else {
            link.style.color = '#ffffff';
        }
    });
});