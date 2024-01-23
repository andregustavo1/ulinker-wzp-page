const container = document.getElementById('container');
const pixBtn = document.getElementById('pixBtn');
const pixArea = document.getElementById('pixArea');

pixBtn.addEventListener('click', () => {
    container.classList.add('hidden');
    pixArea.classList.remove('hidden');
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