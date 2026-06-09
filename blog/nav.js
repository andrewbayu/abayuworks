/* Shared mobile burger menu for the Writing section. Mirrors the homepage nav. */
(() => {
  const nav = document.querySelector('nav.top');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (!nav || !navToggle || !navMenu) return;

  const closeMenu = () => {
    nav.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  // Dynamically inject and track reading progress on article pages
  const article = document.querySelector('article.article');
  if (article) {
    const container = document.createElement('div');
    container.className = 'progress-bar-container';
    
    const progress = document.createElement('div');
    progress.id = 'reading-progress';
    container.appendChild(progress);
    
    nav.appendChild(container);
    
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const totalScrollable = scrollHeight - clientHeight;
      const pct = totalScrollable > 0 ? (window.scrollY / totalScrollable) * 100 : 0;
      progress.style.width = Math.min(100, Math.max(0, pct)) + '%';
    };
    
    document.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
  }
})();
