const container = document.getElementById('container');
const pixBtn = document.getElementById('pixBtn');
const pixArea = document.getElementById('pixArea');

pixBtn.addEventListener('click', () => {
    container.classList.add('hidden');
    pixArea.classList.remove('hidden');
    window.scrollTo(0, 0);
});

const back = document.getElementById('back');

back.addEventListener('click', () => {
    container.classList.remove('hidden');
    pixArea.classList.add('hidden');
});

const copyBtn = document.getElementById('copyBtn');
const pixKey = document.getElementById('pixKey');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(pixKey.innerText);

    copyBtn.textContent = 'Copiado!';

    setTimeout(() => {
        copyBtn.textContent = 'Copiar chave PIX';
    }, 1200);
});

const carousel = document.getElementById('carousel');
const arrowRight = document.getElementById('arrowRight');

let scrollAmount = 0;

arrowRight.addEventListener('click', () => {
    scrollAmount += carousel.clientWidth;
    carousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});