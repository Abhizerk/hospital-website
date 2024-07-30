document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    
    // Check local storage to apply the saved theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        themeStylesheet.setAttribute('href', 'css/dark-theme.css');
        themeToggleButton.textContent = 'Switch to Light Theme';
    } else {
        themeStylesheet.setAttribute('href', 'css/light-theme.css');
        themeToggleButton.textContent = 'Switch to Dark Theme';
    }

    themeToggleButton.addEventListener('click', () => {
        const isDark = themeStylesheet.getAttribute('href') === 'css/dark-theme.css';
        if (isDark) {
            themeStylesheet.setAttribute('href', 'css/light-theme.css');
            themeToggleButton.textContent = 'Switch to Dark Theme';
            localStorage.setItem('theme', 'light');
        } else {
            themeStylesheet.setAttribute('href', 'css/dark-theme.css');
            themeToggleButton.textContent = 'Switch to Light Theme';
            localStorage.setItem('theme', 'dark');
        }
    });
});
