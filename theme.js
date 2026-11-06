(() => {
  const storageKey = 'alex-portfolio-theme';
  let theme = 'dark';

  try {
    if (localStorage.getItem(storageKey) === 'morning') theme = 'morning';
  } catch {
    // The switch still works when browser storage is unavailable.
  }

  document.documentElement.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    const updateToggle = () => {
      const isLight = theme === 'morning';
      toggle.querySelector('.theme-toggle-label').textContent = isLight ? 'Dark Mode' : 'Light Mode';
      toggle.querySelector('.theme-toggle-icon').textContent = isLight ? '☾' : '☀';
    };

    updateToggle();
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'morning' : 'dark';
      document.documentElement.dataset.theme = theme;
      updateToggle();
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // Keep the selected theme for this visit even without storage.
      }
    });
  });
})();
