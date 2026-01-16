'use strict';

'use strict';

/*
  CleopePsyProject — main JavaScript

  Responsibilities:
  - Lazy-load service videos using IntersectionObserver
  - Handle payment modal (demo logic)
  - Populate modal content from data attributes
  - Open external payment stub in new tab
*/


document.addEventListener('DOMContentLoaded', () => {
  /* =========================
     1) Lazy-load videos
     ========================= */
  const lazyVideos = document.querySelectorAll('video[data-src]');

  function loadVideo(videoEl) {
    // Works both with <source src="..."> (already valid) and <source data-src="...">
    const sources = videoEl.querySelectorAll('source');
    if (!sources.length) return;

    sources.forEach((s) => {
      if (!s.src && s.dataset.src) {
        s.src = s.dataset.src;
      }
    });

    // Reload sources and try to play (muted autoplay usually allowed)
    videoEl.load();
    videoEl.play().catch(() => {});
  }

  if (lazyVideos.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            loadVideo(entry.target);
            obs.unobserve(entry.target);
          });
        },
        { rootMargin: '200px 0px' }
      );

      lazyVideos.forEach((v) => io.observe(v));
    } else {
      // Fallback: load all immediately
      lazyVideos.forEach(loadVideo);
    }
  }

  /* =========================
     2) Payment modal (demo)
     ========================= */
  const payModal = document.getElementById('payModal');
  const payService = document.getElementById('payService');
  const payOldPrice = document.getElementById('payOldPrice');
  const payNewPrice = document.getElementById('payNewPrice');
  const payForm = document.getElementById('payForm');
  const payClose = document.querySelector('.pay-modal__close');

  // Payment stub URL (replace later with real payment link)
  const PAYMENT_STUB_URL = 'https://example.com/payment';

  function openPayModalFromButton(btnEl) {
    const service = btnEl.dataset.service || 'Service';
    const price = btnEl.dataset.price || '';
    const oldPrice = btnEl.dataset.oldPrice || '';

    if (payService) payService.textContent = service;

    if (oldPrice) {
      if (payOldPrice) payOldPrice.hidden = false;
      if (payOldPrice) payOldPrice.textContent = `${oldPrice} €`;
    } else {
      if (payOldPrice) payOldPrice.hidden = true;
      if (payOldPrice) payOldPrice.textContent = '';
    }

    if (payNewPrice) payNewPrice.textContent = price ? `${price} €` : '—';

    if (payModal && typeof payModal.showModal === 'function') {
      payModal.showModal();
    }
  }

  // ✅ Container / delegation: one handler for all pay buttons
  function payClickHandler(e) {
    const btn = e.target.closest('.pay-btn');
    if (!btn) return;
    e.preventDefault();
    openPayModalFromButton(btn);
  }

  document.addEventListener('click', payClickHandler);

  // Close modal
  if (payClose) {
    payClose.addEventListener('click', () => payModal?.close());
  }

  // Submit -> open payment stub in a new tab
  if (payForm) {
    payForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.open(PAYMENT_STUB_URL, '_blank', 'noopener,noreferrer');
      payModal?.close();
    });
  }
});
