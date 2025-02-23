// Функция для анимации при скролле
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Слушаем событие скролла
window.addEventListener('scroll', revealOnScroll);

// Запускаем один раз при загрузке страницы
document.addEventListener('DOMContentLoaded', revealOnScroll); 