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
})();
