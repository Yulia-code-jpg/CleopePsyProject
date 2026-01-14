'use strict';

// Lazy-load decorative videos in service cards for performance
document.addEventListener('DOMContentLoaded', function(){
  const videos = document.querySelectorAll('video[data-src]');
  if(videos.length === 0) return;

  function loadVideo(v){
    const source = v.querySelector('source[data-src]');
    if(!source) return;
    if(!source.src){
      source.src = source.dataset.src || v.dataset.src;
      v.load();
      // attempt to play (muted autoplay usually allowed)
      v.play().catch(()=>{});
    }
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

