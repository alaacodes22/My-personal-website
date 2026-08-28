document.getElementById('year').textContent = new Date().getFullYear();


// Lightbox functionality
(function () {

  const lightbox = document.getElementById('lightbox');

  if (!lightbox) return;

  const imgEl = document.getElementById('lightbox-img');
  const capEl = document.getElementById('lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const backdrop = lightbox.querySelector('.lightbox-backdrop');


  function openLightbox(src, alt, caption) {

    imgEl.src = src;
    imgEl.alt = alt || '';
    capEl.textContent = caption || '';

    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';
  }


  function closeLightbox() {

    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';

    imgEl.src = '';
    capEl.textContent = '';
  }


  document
    .querySelectorAll('.lightbox-trigger')
    .forEach(function (el) {

      el.style.cursor = 'zoom-in';

      el.addEventListener('click', function () {

        const src = el.dataset.full || el.src;
        const caption = el.dataset.caption || el.alt || '';

        openLightbox(
          src,
          el.alt,
          caption
        );

      });

    });


  closeBtn.addEventListener('click', closeLightbox);

  backdrop.addEventListener('click', closeLightbox);


  document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape') {
      closeLightbox();
    }

  });

})();
