const reviews = document.querySelectorAll('.review-card');
window.addEventListener('scroll', () => {
  reviews.forEach(r => {
    const top = r.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 100) r.classList.add('visible');
  });
});