// UPDATES
let TRACK;
const LEFT_BTN_SELECTOR = '.nav-btn.left';
const RIGHT_BTN_SELECTOR = '.nav-btn.right';

let LEFT_BTN, RIGHT_BTN;
let updates = [];
let activeIndex = 0;

const GAP = 20;

async function init() {
  TRACK = document.getElementById('updates-track');
  LEFT_BTN = document.querySelector(LEFT_BTN_SELECTOR);
  RIGHT_BTN = document.querySelector(RIGHT_BTN_SELECTOR);

  if (!TRACK) {
    console.error('updates-track element not found.');
    return;
  }
  if (!LEFT_BTN || !RIGHT_BTN) {
    console.error('Navigation buttons not found.');
    return;
  }

  const resp = await fetch('updates.json');
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  updates = await resp.json();

  renderCards();
  activeIndex = 0;

  requestAnimationFrame(() => updatePosition(0));
  attachListeners();

  // Review section
  const scrollSpeed = 1;
  let scrollInterval;

  function setupCarousels(containerSelector, direction = 1) {
    const containers = document.querySelectorAll(containerSelector);
    return Array.from(containers).map(container => {
      const carousel = container.querySelector('.carousel');
      carousel.innerHTML += carousel.innerHTML;
      const halfWidth = carousel.scrollWidth / 2;
      if (direction === -1) {
        container.scrollLeft = halfWidth;
      }
      return { container, halfWidth, direction };
    });
  }

  function startAutoScroll() {
    const rightCarousels = setupCarousels('.lazy-scrolling-container.right', 1);
    const leftCarousels  = setupCarousels('.lazy-scrolling-container.left', -1);

    scrollInterval = setInterval(() => {
      rightCarousels.forEach(c => {
        c.container.scrollLeft += scrollSpeed;
        if (c.container.scrollLeft >= c.halfWidth) {
          c.container.scrollLeft = 0;
        }
      });
      leftCarousels.forEach(c => {
        c.container.scrollLeft -= scrollSpeed;
        if (c.container.scrollLeft <= 0) {
          c.container.scrollLeft = c.halfWidth;
        }
      });
    }, 16);
  }

  startAutoScroll();
}

function renderCards() {
  TRACK.innerHTML = '';
  updates.forEach((u, i) => {
    const card = document.createElement('article');
    const importance = u.importance;
    let colorClass = '';

    if (importance === 1) colorClass = 'importance-1';
    else if (importance === 2) colorClass = 'importance-2';
    else if (importance === 3) colorClass = 'importance-3';

    card.className = `update-card ${colorClass}`;
    card.setAttribute('role', 'listitem');
    card.dataset.index = i;

    const imgDiv = document.createElement('div');
    imgDiv.className = 'thumb';

    const img = document.createElement('img');
    img.src = u.image;
    img.alt = u.title || `Update ${i + 1}`;
    img.loading = 'lazy';
    imgDiv.appendChild(img);

    const meta = document.createElement('div');
    meta.className = 'meta';

    const h3 = document.createElement('h3');
    h3.textContent = u.title;

    const p = document.createElement('p');
    p.textContent = u.description;

    const time = document.createElement('time');
    time.textContent = new Date(u.date).toLocaleDateString();

    meta.appendChild(h3);
    meta.appendChild(p);
    meta.appendChild(time);

    card.appendChild(imgDiv);
    card.appendChild(meta);

    TRACK.appendChild(card);

    img.addEventListener('error', () => {
      imgDiv.style.backgroundColor = 'rgba(255,255,255,0.02)';
      img.remove();
    });
  });

  requestAnimationFrame(() => {
    TRACK.style.paddingLeft = '0px';
    TRACK.style.paddingRight = '0px';
    setCenterClass();
  });
}

function cardDimensions() {
  const card = TRACK.querySelector('.update-card');
  if (!card) return { w: 320, gap: GAP };
  const w = Math.round(card.getBoundingClientRect().width);
  const gap = GAP;
  return { w, gap };
}

function updatePosition(animate = true) {
  const { w, gap } = cardDimensions();
  const step = w + gap;

  const mask = TRACK.closest('.updates-mask');
  if (!mask) return;

  const maskWidth = mask.getBoundingClientRect().width;
  const centerX = maskWidth / 2;

  const translateX = Math.round(
    centerX - w / 2 - activeIndex * step
  );

  if (!animate) {
    TRACK.style.transition = 'none';
    TRACK.style.transform = `translateX(${translateX}px)`;
    void TRACK.offsetWidth;
    TRACK.style.transition = '';
  } else {
    TRACK.style.transform = `translateX(${translateX}px)`;
  }

  setCenterClass();
}

function setCenterClass() {
  const cards = Array.from(TRACK.querySelectorAll('.update-card'));
  cards.forEach(c => c.classList.remove('center'));

  const centerCard = TRACK.querySelector(
    `.update-card[data-index="${activeIndex}"]`
  );

  if (centerCard) centerCard.classList.add('center');
}

function attachListeners() {
  LEFT_BTN.addEventListener('click', () => {
    if (activeIndex > 0) {
      activeIndex -= 1;
      updatePosition(true);
    }
  });

  RIGHT_BTN.addEventListener('click', () => {
    if (activeIndex < updates.length - 1) {
      activeIndex += 1;
      updatePosition(true);
    }
  });

  setupDrag();

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') LEFT_BTN.click();
    if (e.key === 'ArrowRight') RIGHT_BTN.click();
  });
}

function setupDrag() {
  let startX = 0;
  let dragging = false;
  let startTranslate = 0;
  const mask = TRACK.parentElement;

  mask.addEventListener('pointerdown', e => {
    dragging = true;
    startX = e.clientX;

    TRACK.style.transition = 'none';

    const style = window.getComputedStyle(TRACK);
    const matrix = new DOMMatrixReadOnly(style.transform);
    startTranslate = matrix.m41 || 0;

    mask.setPointerCapture?.(e.pointerId);
  });

  mask.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    TRACK.style.transform = `translateX(${Math.round(startTranslate + dx)}px)`;
  });

  mask.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false;

    TRACK.style.transition = '';

    const dx = e.clientX - startX;
    const { w, gap } = cardDimensions();
    const step = w + gap;

    const deltaIndex = Math.round(-dx / step);
    activeIndex = Math.max(
      0,
      Math.min(updates.length - 1, activeIndex + deltaIndex)
    );

    updatePosition(true);
  });

  mask.addEventListener('pointercancel', () => {
    dragging = false;
    updatePosition(true);
  });
}

window.addEventListener('resize', () => updatePosition(false));

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// COUNTDOWN
document.addEventListener("DOMContentLoaded", () => {

  const targetDate = new Date("2026-02-07T10:00:00").getTime();
  let lastValues = {};

  function UpdateCountdown() {
    const now = Date.now();
    let diff = targetDate - now;

    if (diff <= 0) {
      showLiveState();
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 86400);

    SetValue("days", days);
    SetValue("hours", hours);
    SetValue("minutes", minutes);
    SetValue("seconds", seconds);

    const countdownEl = document.getElementById("countdown");

  if (diff <= 86400000) {
    countdownEl?.classList.add("final-glow");
  } else {
    countdownEl?.classList.remove("final-glow");
  }

  }

  function SetValue(id, value) {
    const el = document.getElementById(id);
    if (!el) return;

    const formatted = String(value).padStart(2, "0");

    if (lastValues[id] !== formatted) {
      el.textContent = formatted;
      el.classList.remove("flip");
      void el.offsetWidth;
      el.classList.add("flip");
      lastValues[id] = formatted;
    }
  }

  function showLiveState() {
    const section = document.getElementById("countdown-section");
    if (!section) return;

    section.innerHTML = `
      <div class="live-container">
        <h1>OAKRIDGE CODEFEST 2026 IS LIVE!</h1>
        <p>Let The Hacking Begin!</p>
      </div>
    `;
  }

  UpdateCountdown();
  setInterval(UpdateCountdown, 1000);
});
