(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const progress = document.querySelector('[data-progress]');
  const stage = document.querySelector('[data-stage]');
  const plate = document.querySelector('[data-plate]');
  const cold = document.querySelector('[data-cold]');
  const hot = document.querySelector('[data-hot]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer:fine)').matches;

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.classList.remove('is-open');
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.classList.toggle('is-open', !open);
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 16);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const reveals = [...document.querySelectorAll('.reveal')];
  if (!reducedMotion && 'IntersectionObserver' in window) {
    root.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
    reveals.forEach((el) => observer.observe(el));
    requestAnimationFrame(() => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * .94 && rect.bottom > 0) el.classList.add('is-visible');
      });
    });
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  if (!reducedMotion && finePointer && stage && plate) {
    stage.addEventListener('pointermove', (event) => {
      const rect = stage.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - .5;
      const ny = (event.clientY - rect.top) / rect.height - .5;
      plate.style.transform = `translate(-50%,-50%) rotateX(${58 - ny * 7}deg) rotateZ(${-15 + nx * 5}deg) translate3d(${nx * 8}px,${ny * 8}px,0)`;
      if (cold) cold.style.transform = `translate3d(${nx * 22}px,${ny * 14}px,0)`;
      if (hot) hot.style.transform = `translate3d(${nx * -18}px,${ny * -12}px,0)`;
    });
    stage.addEventListener('pointerleave', () => {
      plate.style.transform = '';
      if (cold) cold.style.transform = '';
      if (hot) hot.style.transform = '';
    });
  }

  if (!reducedMotion && finePointer) {
    document.querySelectorAll('.magnetic').forEach((el) => {
      el.addEventListener('pointermove', (event) => {
        const r = el.getBoundingClientRect();
        const x = event.clientX - (r.left + r.width / 2);
        const y = event.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * .08}px,${y * .08}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }
})();
