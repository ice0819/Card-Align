(() => {
  'use strict';

  const root = document.documentElement;
  const page = root.dataset.page || 'home';
  // Remove obsolete preferences and language parameters from previously shared links.
  try {
    localStorage.removeItem('card-align-language');
    localStorage.removeItem('card-align-theme');
  } catch (_) {}
  const pageUrl = new URL(window.location.href);
  if (pageUrl.searchParams.has('lang')) {
    pageUrl.searchParams.delete('lang');
    try { window.history.replaceState(null, '', pageUrl); } catch (_) {}
  }
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  function closeMenu() {
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '開啟選單');
  }
  menuButton.addEventListener('click', () => {
    mobileMenu.hidden = !mobileMenu.hidden;
    menuButton.setAttribute('aria-expanded', String(!mobileMenu.hidden));
    menuButton.setAttribute('aria-label', mobileMenu.hidden ? '開啟選單' : '關閉選單');
  });
  mobileMenu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuButton.focus(); }
  });
  window.matchMedia('(min-width: 1021px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function initializeCarousel() {
    // Native buttons and arrow keys share the same card fan. No drag library needed.
    const showcase = document.querySelector('.card-showcase');
    if (!showcase) return;
    const cards = [...showcase.querySelectorAll('.showcase-card')];
    const status = document.querySelector('#carousel-status');
    let current = 4;
    let lastInteraction = 0;
    let hovering = false;
    let dragStart = null;
    let suppressClick = false;

    function showCard(index, manual = true) {
      current = (index + cards.length) % cards.length;
      cards.forEach((card, i) => {
        let distance = (i - current + cards.length) % cards.length;
        if (distance > cards.length / 2) distance -= cards.length;
        card.style.setProperty('--offset', distance);
        card.style.setProperty('--angle', `${distance * 5.5}deg`);
        card.style.setProperty('--rise', `${Math.abs(distance) ** 1.7 * 6}px`);
        card.style.setProperty('--layer', 8 - Math.abs(distance));
        card.classList.toggle('is-current', distance === 0);
        card.tabIndex = distance === 0 ? 0 : -1;
        if (distance === 0) card.setAttribute('aria-current', 'true');
        else card.removeAttribute('aria-current');
      });
      if (manual) {
        lastInteraction = Date.now();
        status.textContent = `${current + 1} / ${cards.length} — ${cards[current].dataset.name}`;
      }
    }
    document.querySelector('.showcase-prev').addEventListener('click', () => showCard(current - 1));
    document.querySelector('.showcase-next').addEventListener('click', () => showCard(current + 1));
    showcase.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); showCard(current + (event.key === 'ArrowRight' ? 1 : -1));
        if (event.target.classList.contains('showcase-card')) cards[current].focus({ preventScroll: true });
      }
    });
    showcase.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') hovering = true; });
    showcase.addEventListener('pointerleave', () => { hovering = false; dragStart = null; });
    showcase.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.target.closest('.showcase-controls')) return;
      dragStart = { x: event.clientX, y: event.clientY };
      lastInteraction = Date.now();
    });
    showcase.addEventListener('pointerup', event => {
      if (!dragStart) return;
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
      if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) {
        showCard(current + (dx < 0 ? 1 : -1));
        suppressClick = true;
        setTimeout(() => { suppressClick = false; }, 200);
      }
      dragStart = null;
    });
    showcase.addEventListener('pointercancel', () => { dragStart = null; });
    cards.forEach((card, i) => {
      card.addEventListener('dragstart', event => event.preventDefault());
      card.addEventListener('click', () => {
        if (suppressClick) return;
        showCard(i);
      });
    });
    setInterval(() => {
      if (reducedMotion.matches || document.hidden || hovering || dragStart || showcase.contains(document.activeElement) || Date.now() - lastInteraction < 9000) return;
      const bounds = showcase.getBoundingClientRect();
      if (bounds.bottom > 0 && bounds.top < window.innerHeight) showCard(current + 1, false);
    }, 4500);
    showCard(current, false);

  }

  function initializeAnalysisDemo() {
    // Accessible tabs use roving focus and support arrow, Home, and End keys.
    const tabs = [...document.querySelectorAll('[role="tab"]')];
    if (!tabs.length) return;
    function selectTab(tab, focus = false) {
      tabs.forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        item.classList.toggle('is-active', selected);
        document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
      });
      document.querySelector('.tutorial-step-copy').textContent = tab.querySelector('.tab-copy > span').textContent;
      if (focus) tab.focus({ preventScroll: true });
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectTab(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % tabs.length;
        if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
      });
    });
    const range = document.querySelector('#centering-offset');
    const ratioText = value => `${value} : ${100 - value}`;
    // These thresholds mirror the app's centering estimate in ReportActivity.
    function psaGrade(horizontal, vertical) {
      const worst = Math.max(horizontal, 100 - horizontal, vertical, 100 - vertical);
      return worst <= 55 ? '10' : worst <= 60 ? '9' : worst <= 65 ? '8' : worst <= 70 ? '7' : '<7';
    }
    function bgsGrade(horizontal, vertical) {
      const h = Math.max(horizontal, 100 - horizontal);
      const v = Math.max(vertical, 100 - vertical);
      const hPerfect = Math.abs(h - 50) <= .5;
      const vPerfect = Math.abs(v - 50) <= .5;
      if (hPerfect && vPerfect) return '10';
      if ((hPerfect && v <= 55) || (vPerfect && h <= 55)) return '9.5';
      return h <= 55 && v <= 55 ? '9' : h <= 60 && v <= 60 ? '8' : h <= 65 && v <= 65 ? '7' : '<7';
    }
    const gradeValue = value => value === '<7' ? 6.9 : Number(value);
    const lowerGrade = (front, back) => gradeValue(front) <= gradeValue(back) ? front : back;
    function updateAnalysis() {
      const offset = Number(range.value);
      const front = { horizontal: 50 + offset, vertical: 52 };
      const back = { horizontal: 51, vertical: 50 };
      document.querySelector('#centering-output').value = ratioText(front.horizontal);
      range.setAttribute('aria-valuetext', `左 ${front.horizontal} 右 ${100 - front.horizontal}`);
      const outline = document.querySelector('.inner-outline');
      outline.style.setProperty('--demo-left', `${34 * front.horizontal / 100}px`);
      outline.style.setProperty('--demo-right', `${34 * (100 - front.horizontal) / 100}px`);
      Object.entries({ front, back }).forEach(([side, ratios]) => {
        Object.entries(ratios).forEach(([axis, value]) => {
          document.querySelector(`[data-ratio="${side}-${axis}"]`).textContent = ratioText(value);
        });
      });
      document.querySelector('#demo-psa-grade').textContent = lowerGrade(
        psaGrade(front.horizontal, front.vertical), psaGrade(back.horizontal, back.vertical));
      document.querySelector('#demo-bgs-grade').textContent = lowerGrade(
        bgsGrade(front.horizontal, front.vertical), bgsGrade(back.horizontal, back.vertical));
    }
    range.addEventListener('input', updateAnalysis);
    updateAnalysis();

  }
  initializeCarousel();
  initializeAnalysisDemo();

  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    root.classList.add('js-motion');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: .07 });
    document.querySelectorAll('.reveal').forEach(node => revealObserver.observe(node));
  }
  document.querySelector('#year').textContent = new Date().getFullYear();
  const legacyPages = { '#how-it-works': 'tutorial.html', '#service-info': 'pricing.html' };
  if (page === 'home' && legacyPages[window.location.hash]) {
    const target = new URL(legacyPages[window.location.hash], window.location.href);
    target.hash = window.location.hash;
    window.location.replace(target.href);
  }
})();
