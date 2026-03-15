document.addEventListener('DOMContentLoaded', () => {
    console.log("Finance Blog Loaded.");

    // Simple interactivity: Highlight cards on hover
    const cards = document.querySelectorAll('.post-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = '0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});document.addEventListener('DOMContentLoaded', () => {
    console.log("Finance Blog Loaded.");

    // Simple interactivity: Highlight cards on hover
    const cards = document.querySelectorAll('.post-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = '0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});