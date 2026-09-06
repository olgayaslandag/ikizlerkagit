document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const hero = document.querySelector('.hero');
  const heroImages = [
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1800&q=90',
    'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1800&q=90',
    'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1800&q=90'
  ];
  if (hero) {
    let currentHeroImage = 0;
    window.setInterval(() => {
      currentHeroImage = (currentHeroImage + 1) % heroImages.length;
      const gradient = window.innerWidth <= 575
        ? 'linear-gradient(180deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.72) 46%, rgba(255,255,255,.1) 100%)'
        : 'linear-gradient(90deg, rgba(255,255,255,.99) 0%, rgba(255,255,255,.94) 29%, rgba(255,255,255,.08) 70%)';
      hero.style.backgroundImage = `${gradient}, url('${heroImages[currentHeroImage]}')`;
    }, 6000);
  }

  const nav = document.getElementById('mainNav');
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
});
