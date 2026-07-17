import Lenis from 'lenis';
import anime from 'animejs/lib/anime.es.js';

/**
 * Dawoodi Opticals — Motion layer
 * Subtle, elegant, premium. Lenis smooth scroll + Anime.js reveals.
 */

let lenis: Lenis | null = null;

function initLenis() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

function initReveals() {
  const items = document.querySelectorAll<HTMLElement>('.reveal');
  if (!items.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay || 0);
          setTimeout(() => el.classList.add('is-visible'), delay);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  items.forEach((el) => io.observe(el));
}

function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const toggle = nav.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const menu = nav.querySelector<HTMLElement>('[data-nav-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle?.setAttribute('aria-expanded', 'false');
      })
    );
  }
}

function initHeroParallax() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const heroImg = document.querySelector<HTMLElement>('[data-hero-img]');
  if (!heroImg) return;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroImg.style.transform = `translateY(${y * 0.12}px) scale(1.04)`;
      }
    },
    { passive: true }
  );
}

function initFrameHover() {
  const cards = document.querySelectorAll<HTMLElement>('[data-frame-card]');
  cards.forEach((card) => {
    const img = card.querySelector<HTMLElement>('[data-frame-img]');
    if (!img) return;
    card.addEventListener('mouseenter', () => {
      anime({
        targets: img,
        scale: 1.06,
        duration: 600,
        easing: 'easeOutCubic',
      });
    });
    card.addEventListener('mouseleave', () => {
      anime({
        targets: img,
        scale: 1,
        duration: 600,
        easing: 'easeOutCubic',
      });
    });
  });
}

export function initMotion() {
  initLenis();
  initReveals();
  initNav();
  initHeroParallax();
  initFrameHover();
}