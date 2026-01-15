'use strict';

// Lazy-load decorative videos in service cards for performance
document.addEventListener('DOMContentLoaded', function(){
  const videos = document.querySelectorAll('video[data-src]');
  if(videos.length === 0) return;



function loadVideo(v) {
  const sources = v.querySelectorAll('source[data-src]');
  if (!sources.length) return;

  sources.forEach((s) => {
    if (!s.src) s.src = s.dataset.src;
  });

  v.load();
  v.play().catch(() => {});
}


  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          loadVideo(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px' });

    videos.forEach(v => io.observe(v));
  } else {
    // Fallback: load all immediately
    videos.forEach(loadVideo);
  }
});

// ===== Pay modal logic (demo) =====
const payModal = document.getElementById("payModal");
const payService = document.getElementById("payService");
const payOldPrice = document.getElementById("payOldPrice");
const payNewPrice = document.getElementById("payNewPrice");
const payForm = document.getElementById("payForm");
const payClose = document.querySelector(".pay-modal__close");

// Заглушка оплаты (потом заменишь на реальный payment link)
const PAYMENT_STUB_URL = "https://example.com/payment";

document.querySelectorAll(".pay-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const service = btn.dataset.service || "Услуга";
    const price = btn.dataset.price || "";
    const oldPrice = btn.dataset.oldPrice || "";

    payService.textContent = service;

    if (oldPrice) {
      payOldPrice.hidden = false;
      payOldPrice.textContent = `${oldPrice} €`;
    } else {
      payOldPrice.hidden = true;
      payOldPrice.textContent = "";
    }

    payNewPrice.textContent = price ? `${price} €` : "—";

    if (payModal && typeof payModal.showModal === "function") {
      payModal.showModal();
    }
  });
});

payClose?.addEventListener("click", () => payModal?.close());

// submit -> open payment stub in a new tab
payForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  window.open(PAYMENT_STUB_URL, "_blank", "noopener,noreferrer");
  payModal?.close();
});



