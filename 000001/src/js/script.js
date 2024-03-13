const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', function() {
    slider.scrollLeft += 345;
});

prev.addEventListener('click', function() {
    slider.scrollLeft -= 345;
});

const container = document.getElementById('container');
const pixBtn = document.getElementById('pixBtn');
const pixArea = document.getElementById('pixArea');

const back = document.getElementById('back');

pixBtn.addEventListener('click', () => {
    container.classList.add('hidden');
    pixArea.classList.remove('hidden');
    back.classList.remove('opacity-0');
    window.scrollTo(0, 0);
});

back.addEventListener('click', () => {
    container.classList.remove('hidden');
    pixArea.classList.add('hidden');
    back.classList.add('opacity-0');
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

