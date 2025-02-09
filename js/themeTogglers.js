// TODO: Store locally
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.querySelector(`[data-theme-switcher=${prefersDark ? 'dark' : 'light'}]`).classList.add('d-none')
themeTogglers = document.querySelectorAll('[data-theme-switcher]')
themeTogglers.forEach(toggler => {
    toggler.addEventListener('click', function (e) {
        e.preventDefault();
        themeTogglers.forEach(toggler => toggler.classList.toggle('d-none'));
        const theme = this.getAttribute('data-theme-switcher');
        document.documentElement.setAttribute('data-theme', theme);
    });
});

