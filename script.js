// Activate lucide icons
lucide.createIcons();

// Smooth scroll helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Navigation buttons
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-scroll');
    scrollToSection(id);
    mobileMenu.classList.remove('show');
    menuToggle.setAttribute('data-open', 'false');
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons({ attrs: { width: 24, height: 24 } });
  });
});

// Mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('data-open') === 'true';
  menuToggle.setAttribute('data-open', String(!open));
  mobileMenu.classList.toggle('show');
  menuToggle.innerHTML = open ? '<i data-lucide="menu"></i>' : '<i data-lucide="x"></i>';
  lucide.createIcons({ attrs: { width: 24, height: 24 } });
});

// Skill bar animation on load
window.addEventListener('load', () => {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const width = bar.getAttribute('data-progress') || '0';
    requestAnimationFrame(() => { bar.style.width = width + '%'; });
  });
});

// Contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log('Form submitted:', data);
  alert("Thank you for your message! I'll get back to you soon.");
  form.reset();
});

