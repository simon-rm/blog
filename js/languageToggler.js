const toggleLanguage = () => {
    const storedLanguage = localStorage.getItem('language')

    localStorage.setItem('language', storedLanguage === 'en' ? 'es' : 'en');
    location.reload();
};

window.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('language');

    if (language === 'es') {
        const languageImgs = document.querySelectorAll('.language');

        const temp = languageImgs[0].src;
        languageImgs[0].src = languageImgs[1].src;
        languageImgs[1].src = temp;
    }

    document.querySelector('#unselected-language').addEventListener('click', toggleLanguage);
});