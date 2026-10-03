/* ============================================================
   1. SMOOTH SCROLL + NAV HIGHLIGHT
============================================================ */
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   2. BACK TO TOP
============================================================ */
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   3. SECTION 1 DEMO
============================================================ */
function demonstrateStack() {
  const messages = [
    'Front-End: HTML + CSS + JavaScript loaded ✔',
    'Back-End: Node.js server would process this request ✔',
    'Database: MySQL would store the result ✔',
    'Full stack = all three layers working together! 🚀'
  ];
  const output = document.getElementById('stackMessage');
  let i = 0;
  output.textContent = messages[0];

  const interval = setInterval(() => {
    i++;
    if (i < messages.length) {
      output.textContent = messages[i];
    } else {
      clearInterval(interval);
    }
  }, 900);
}

/* ============================================================
   4. JS COUNTER
============================================================ */
const jsBtn = document.getElementById('jsBtn');
const jsReset = document.getElementById('jsReset');
const jsOutput = document.getElementById('jsOutput');
let count = 0;

jsBtn.addEventListener('click', () => {
  count++;
  jsOutput.textContent = `You clicked ${count} time(s)!`;
});

jsReset.addEventListener('click', () => {
  count = 0;
  jsOutput.textContent = 'You clicked 0 time(s)!';
});

/* ============================================================
   5. FORM VALIDATION
============================================================ */
const jsForm = document.getElementById('jsForm');
const jsName = document.getElementById('jsName');
const jsEmail = document.getElementById('jsEmail');
const jsFeedback = document.getElementById('jsFeedback');

jsForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = jsName.value.trim();
  const email = jsEmail.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email) {
    jsFeedback.textContent = '⚠️ Please fill in both fields.';
    jsFeedback.className = 'mt-2 mb-0 text-warning';
    return;
  }

  if (!emailPattern.test(email)) {
    jsFeedback.textContent = '⚠️ Please enter a valid email address.';
    jsFeedback.className = 'mt-2 mb-0 text-warning';
    return;
  }

  jsFeedback.textContent = `✅ Thank you, ${name}! Your email (${email}) is valid.`;
  jsFeedback.className = 'mt-2 mb-0 text-success';
  jsForm.reset();
});

/* ============================================================
   6. FADE-IN ON SCROLL
============================================================ */
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  if (section.id !== 'home') {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.9s ease-out';
    observer.observe(section);
  }
});

/* ============================================================
   7. 3D TILT ON CARDS (MOUSE FOLLOW)
============================================================ */
document.querySelectorAll('.card-3d').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
  });
});

/* ============================================================
   8. SVG DIAGRAM ANIMATION (fade-in when visible)
============================================================ */
const diagrams = document.querySelectorAll('.diagram-svg');
const diagramObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'scale(1)';
    }
  });
}, { threshold: 0.2 });

diagrams.forEach(d => {
  d.style.opacity = 0;
  d.style.transform = 'scale(0.9)';
  d.style.transition = 'all 1s ease-out';
  diagramObserver.observe(d);
});