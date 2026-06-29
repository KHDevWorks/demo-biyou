console.log('main.js loaded');

const targets = document.querySelectorAll('.fade-in, .slide-up');

if (!('IntersectionObserver' in window)) {
  console.warn('IntersectionObserver is not supported in this browser.');
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  });

  targets.forEach(target => observer.observe(target));
}
