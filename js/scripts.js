// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Dark mode toggle
const darkModeToggle = document.getElementById('theme-toggle');
function updateThemeIcon() {
  if (document.body.classList.contains('dark')) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    updateThemeIcon();
  });
}

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}
updateThemeIcon();

// Language selector
const langSelect = document.getElementById('lang-select');
if (langSelect) {
  langSelect.value = localStorage.getItem('language') || 'en';
  langSelect.addEventListener('change', () => {
    localStorage.setItem('language', langSelect.value);
    location.reload();
  });
}
