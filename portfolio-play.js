(() => {
  const stickerByProject = {
    hellycat: 'cat',
    kenx: 'motion',
    'cat-talk': 'message',
    afk: 'growth',
    'integrity-film': 'film',
    'nuo-dance': 'sound',
    tumate: 'ride',
    huashan: 'sound',
    'digital-equity': 'swipe',
    her: 'letter',
    'ancient-type': 'glyph',
    cave: 'film',
    'silent-release': 'message',
    'wow-balloon': 'balloon',
  };

  document.querySelectorAll('main article:is([data-project], [data-carousel-copy])').forEach((card) => {
    const artwork = stickerByProject[card.dataset.project || card.dataset.carouselCopy];
    if (!artwork) return;

    const sticker = document.createElement('img');
    sticker.className = 'project-sticker';
    sticker.src = 'assets/portfolio-stickers/' + artwork + '.svg';
    sticker.alt = '';
    sticker.loading = 'lazy';
    sticker.decoding = 'async';
    card.classList.add('has-project-sticker');

    const gamePreview = card.querySelector('.project-preview');
    if (gamePreview) gamePreview.append(sticker);
    else card.querySelector('.card-foot').before(sticker);
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const board = document.querySelector('.hero-board');
  let pointerFrame = 0;
  let pointerPosition;

  board.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse' || prefersReducedMotion.matches) return;
    pointerPosition = { x: event.clientX, y: event.clientY };
    if (pointerFrame) return;

    pointerFrame = requestAnimationFrame(() => {
      const bounds = board.getBoundingClientRect();
      board.style.setProperty('--board-x', ((pointerPosition.x - bounds.left) / bounds.width - .5) * 32 + 'px');
      board.style.setProperty('--board-y', ((pointerPosition.y - bounds.top) / bounds.height - .5) * 24 + 'px');
      pointerFrame = 0;
    });
  }, { passive: true });

  function resetBoard() {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    board.style.removeProperty('--board-x');
    board.style.removeProperty('--board-y');
  }

  board.addEventListener('pointerleave', resetBoard);
  prefersReducedMotion.addEventListener('change', resetBoard);

  if ('IntersectionObserver' in window) {
    const stickerObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('sticker-arrived');
        stickerObserver.unobserve(entry.target);
      }
    }, { threshold: .65 });

    document.querySelectorAll('main article[data-project] .project-sticker').forEach((sticker) => {
      stickerObserver.observe(sticker);
    });
  }
})();
