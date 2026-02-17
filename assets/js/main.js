(function () {
  'use strict';

  function initSmoothAnchors() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        const hash = link.getAttribute('href');
        if (!hash || hash === '#') {
          return;
        }
        const target = document.querySelector(hash);
        if (!target) {
          return;
        }
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', hash);
      });
    });
  }

  function initRevealOnScroll() {
    const revealEls = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || !revealEls.length) {
      revealEls.forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  function init() {
    const modules = window.AIHorizonsComponents;

    initSmoothAnchors();
    initRevealOnScroll();
    initYear();

    if (!modules) {
      return;
    }

    modules.initAccordions();
    modules.initResourceFinder();
    modules.initProjectPromptGenerator();
    modules.initScenarioQuiz();
    modules.initLiteracyQuiz();
    modules.initFlipCards();
    modules.initCopyPrompts();
    modules.initForecastSlider();
    modules.initPollWidget();
  }

  window.AIHorizons = {
    init
  };

  document.addEventListener('DOMContentLoaded', init);
})();
