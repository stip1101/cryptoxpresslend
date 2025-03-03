document.addEventListener('DOMContentLoaded', function() {
    // Находим первую карточку роли
    const firstCard = document.querySelector('.role-card:first-child');
    
    if (firstCard) {
        // Находим контейнер иконки
        const iconWrapper = firstCard.querySelector('.role-card__icon-wrapper');
        
        if (iconWrapper) {
            // Очищаем содержимое и добавляем новую SVG-иконку с тремя четырехугольными звездами
            iconWrapper.innerHTML = `
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="star-icon">
                    <!-- Первая четырехугольная звезда (слева) -->
                    <path d="M6 8l1 2 2 0.5-1.5 1.5 0.5 2-2-1-2 1 0.5-2-1.5-1.5 2-0.5z" fill="white"/>
                    
                    <!-- Вторая четырехугольная звезда (центр) -->
                    <path d="M12 6l1.5 3 3 0.5-2 2 0.5 3-3-1.5-3 1.5 0.5-3-2-2 3-0.5z" fill="white"/>
                    
                    <!-- Третья четырехугольная звезда (справа) -->
                    <path d="M18 8l1 2 2 0.5-1.5 1.5 0.5 2-2-1-2 1 0.5-2-1.5-1.5 2-0.5z" fill="white"/>
                </svg>
            `;
        }
    }
}); 