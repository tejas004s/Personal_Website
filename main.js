/* ============================================================
   TEJAS S. PORTFOLIO — MAIN.JS
   ============================================================ */

// ——— NAV SCROLL EFFECT ———
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ——— MOBILE HAMBURGER ———
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ——— TERMINAL TYPEWRITER ———
const COMMANDS = [
  {
    cmd: 'python sent_x.py --mode eval',
    output: [
      { text: 'Loading model weights...', delay: 400 },
      { text: '▸ Accuracy: <span class="highlight">87.3%</span>', delay: 700 },
      { text: '▸ Dataset : 2,500 tweets', delay: 950 },
      { text: '<span class="success">✓ Sent-X evaluation complete.</span>', delay: 1200 },
    ]
  },
  {
    cmd: 'ls ~/projects/',
    output: [
      { text: '<span class="highlight">sent-x/</span>  mern-app/  scraper-pipeline/', delay: 400 },
      { text: 'char-lm/  traffic-detection/  hospital-apps/', delay: 700 },
    ]
  },
  {
    cmd: 'git log --oneline -3',
    output: [
      { text: '<span class="highlight">a3f2c91</span> feat: add explainability module to Sent-X', delay: 400 },
      { text: '<span class="highlight">d8e14b0</span> fix: batch size optimisation in scraper', delay: 700 },
      { text: '<span class="highlight">c1a09f4</span> init: char-level LM from scratch in PyTorch', delay: 1000 },
    ]
  },
];

const typedCmd   = document.getElementById('typed-cmd');
const termOutput = document.getElementById('terminal-output');
const cursor     = document.querySelector('.cursor');

let cmdIndex = 0;

function typeCmd(text, callback) {
  typedCmd.textContent = '';
  let i = 0;
  const iv = setInterval(() => {
    typedCmd.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(iv);
      if (callback) setTimeout(callback, 300);
    }
  }, 55);
}

function showOutput(lines, callback) {
  termOutput.innerHTML = '';
  lines.forEach(({ text, delay }) => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 'out-line';
      span.innerHTML = text;
      termOutput.appendChild(span);
    }, delay);
  });
  const last = lines[lines.length - 1];
  setTimeout(callback, last.delay + 1800);
}

function clearAndNext() {
  setTimeout(() => {
    typedCmd.textContent = '';
    termOutput.innerHTML = '';
    cmdIndex = (cmdIndex + 1) % COMMANDS.length;
    runCycle();
  }, 600);
}

function runCycle() {
  const { cmd, output } = COMMANDS[cmdIndex];
  typeCmd(cmd, () => showOutput(output, clearAndNext));
}

// Start after small delay so page loads first
setTimeout(runCycle, 800);

// ——— SCROLL REVEAL ———
const revealEls = document.querySelectorAll(
  '.project-card, .skill-group, .stat, .education-card, .about-left p, .contact-item'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      target.classList.add('visible');
      observer.unobserve(target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ——— STAGGER REVEAL FOR PROJECT CARDS ———
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});

document.querySelectorAll('.skill-group').forEach((grp, i) => {
  grp.style.transitionDelay = `${i * 60}ms`;
});
