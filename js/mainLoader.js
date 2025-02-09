// idea: never reload page
// maybe use localStorage for this? Get the file directly instead of an include?
window.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('language');
    const page = new URL(location.href).searchParams.get("page") ?? 'main';
    document.querySelector('main')
        .innerHTML = `<div data-include="${page}${language === 'es' ? '_es' : ''}.html"></div>`;
});