const container = document.querySelector('body');
const themeMode = document.querySelector('.btn-theme');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

const changeTheme = () => {
    container.style.setProperty('--background-color-default', theme === 'light' ? 'var(--background-color-light)' : 'var(--background-color-dark)');
    
    container.style.setProperty('--color-default', theme === 'light' ? 'var(--color-light)' : 'var(--color-dark)');

    container.style.setProperty('--input-border-color-default', theme === 'light' ? 'var(--input-border-color-light)' : 'var(--input-border-color-dark)');

    container.style.setProperty('--shadow-color-default', theme === 'light' ? 'var(--shadow-color-light' : 'var(--shadow-color-dark');

    container.style.setProperty('--highlight-background-default', theme === 'light' ? 'var(--highlight-background-light)' : 'var(--highlight-background-dark)');

    container.style.setProperty('--highlight-color-default', theme === 'light' ? 'var(--highlight-color-light)' : 'var(--highlight-color-dark)');

    container.style.setProperty('--highlight-description-default', theme === 'light' ? 'var(--highlight-description-light)' : 'var(--highlight-description-dark)');

    container.style.setProperty('--icon-light-default', theme === 'light' ? 'var(--icon-light-light)' : 'var(--icon-light-dark)');

    if (theme === 'dark') {
        themeMode.src = '../assets/dark-mode.svg';
        btnPrev.src = '../assets/seta-esquerda-branca.svg';
        btnNext.src = '../assets/seta-direita-branca.svg';
    } else {
        themeMode.src = '../assets/light-mode.svg';
        btnPrev.src = '../assets/seta-esquerda-preta.svg';
        btnNext.src = '../assets/seta-direita-preta.svg';
    }

    localStorage.setItem('theme', theme);
};

changeTheme();

themeMode.addEventListener('click', () => {
    theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    changeTheme();
});