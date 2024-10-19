// Animate on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section, .project-card, .about-container img, .about-content');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target); // Ensures animation only happens once
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.animationPlayState = 'paused'; // Pause until it's in view
        observer.observe(el);
    });
});
