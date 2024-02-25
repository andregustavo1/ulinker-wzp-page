const container = document.getElementById('container');
// const pixBtn = document.getElementById('pixBtn');
// const pixArea = document.getElementById('pixArea');

// pixBtn.addEventListener('click', () => {
//     container.classList.add('hidden');
//     pixArea.classList.remove('hidden');
//     window.scrollTo(0, 0);
// });

// const back = document.getElementById('back');

// back.addEventListener('click', () => {
//     container.classList.remove('hidden');
//     pixArea.classList.add('hidden');
// });

// const copyBtn = document.getElementById('copyBtn');
// const pixKey = document.getElementById('pixKey');

// copyBtn.addEventListener('click', () => {
//     navigator.clipboard.writeText(pixKey.innerText);

//     copyBtn.textContent = 'Copiado!';

//     setTimeout(() => {
//         copyBtn.textContent = 'Copiar chave PIX';
//     }, 1200);
// });


const assBtn = document.getElementById('assBtn');
const assArea = document.getElementById('assArea');

assBtn.addEventListener('click', () => {
    container.classList.add('hidden');
    assArea.classList.remove('hidden');
    window.scrollTo(0, 0);
});

const back1 = document.getElementById('back1');

back1.addEventListener('click', () => {
    container.classList.remove('hidden');
    assArea.classList.add('hidden');
});